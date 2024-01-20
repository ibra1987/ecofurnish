"use server";
import { CustomError } from "@/lib/CustomError";
import { isEmail } from "@/lib/isEmail";
import { isEmpty } from "@/lib/isEmpty";
import { EmailMessageType, NewUser } from "@/types/users";
import connection from "@/DB/dbConnection";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt"
import { TokenGenerator } from "@/lib/TokenGenerator";
import { EmailSender } from "@/lib/EmailSender";
import { getUserByEmail } from "@/dataAccess/users";


//SETUP
const saltRounds = 10 


export async function registerAction(formdata: FormData):Promise<ServerActionResponse> {

  
  try {

    // CHECK FORMDATA PAYLOAD
    if (
      !formdata.get("email") ||
      !formdata.get("password") ||
      !formdata.get("fullName") ||
      !formdata.get("passwordConfirmation")
    ) {
      throw new CustomError("All fields are required.", 400);
    }
    const emailValue = formdata.get("email") as string;
    const passwordValue = formdata.get("password") as string;
    const passwordConfirmationValue = formdata.get(
      "passwordConfirmation"
    ) as string;
    const fullNameValue = formdata.get("fullName") as string;


    //CONSTRUCT A NEWUSER OBJECT FROM THE FORMDATA
    const userInfo: NewUser = {
      fullName: fullNameValue,
      email: emailValue,
      password: passwordValue,
      passwordConfirmation: passwordConfirmationValue,
    };
     //CHECK FOR EMPTY FIELDS IN THE OBJECT 
    // const { isError, errors } = await isEmpty(userInfo);
    // if (isError) {
    //   throw errors;
    // }

    //CHECK IF EMAIL IS VALID
    const isValidEmail = await isEmail(userInfo.email);

    if (!isValidEmail) {
      throw new CustomError("Please check your email address", 400);
    }


    // CHECK PASSWORD LENGTH
    if(passwordValue.length < 8){
      throw new CustomError("Password must be at least 8 characters long.",400)
    }

    //CHECK IF PASSWORD AND PASSWORD CONFIRMATION MATCH
    if (passwordValue !== passwordConfirmationValue) {
      throw new CustomError("Passwords do not match", 400);
    }

    //CONNECT TO DB
    const client = await connection;

    // CHECK IF DB CONNECTION FAILED
    if(!client){
      throw new CustomError("Could not connect to the database",500)
    }

    //EXTRACT PASSWORD CONFIRMATION FIELD FORM USER OBJECT
    const { passwordConfirmation, ...newUser } = userInfo;

    //CHECK IF USER ALREADY EXISTS
    const _user = await getUserByEmail(newUser.email)

    if(_user){
      throw new CustomError("user already exists, try log in",400)
    }

    //HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(newUser.password,saltRounds)
    newUser.password = hashedPassword


    // INSERT THE NEW USER 
    const result = await client
      .db("startUp")
      .collection("users")
      .insertOne(newUser);


      // CHECK FOR ERRORS
    if (!result) {
     throw new CustomError("Server error, could not create the account",500)
    }

    revalidatePath('/users/register')

    //TODO SEND EMAIL VERIFICATION
    // CONSTRUCT EMAIL VERIFICATION LINK USING JWT - WILL BE VALID FOR ONE HOUR 
    const _id = result.insertedId.toString()
    

    const {errors,data,success} = await TokenGenerator("_id",_id,"1h")
    // CHECK IF TOKEN HAS NOY BEEN GENERATED
    if(!success){
        //TODO PROVIDE A WAY TO RESEND THE EMAIL 
        // console.log(errors)
    }
    // CONSTRUCT THE VERIFICATION LINK 

    const verificationLink = `http://localhost:3000/users/email-verification?tok=${data}`

    // CONSTRUCT EMAIL MESSAGE
    const msg:EmailMessageType = {
      to:newUser.email,
      from:"brahim.driouch@imagebgremover.io",
      subject:"Account verification",
      text:"To fully use Ecofurnish features, please activate your account. Link will be dead within one hour.",
      html:`<a href=${verificationLink} target="_blank">Activate your account</a>`
    }

    //SEND THE EMAIL

        await EmailSender(msg)
       

    
    // RETURN A RESPONSE 
    return {
      success:true,
      data:{
        message:"Account created successfully. Check your email for validation link."

      }
    }
  } catch (error: unknown) {
    const handledError = ErrorFormatter(error);
    return{
      success:false,
      errors:handledError.error
    }
  }
}
