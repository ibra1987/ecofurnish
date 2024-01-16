"use server";
import { CustomError } from "@/lib/CustomError";
import { isEmail } from "@/lib/isEmail";
import { isEmpty } from "@/lib/isEmpty";
import { NewUser } from "@/types/users";
import connection from "@/DB/dbConnection";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";

export async function registerAction(formdata: FormData):Promise<ServerActionResponse> {
  try {
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

    const userInfo: NewUser = {
      fullName: fullNameValue,
      email: emailValue,
      password: passwordValue,
      passwordConfirmation: passwordConfirmationValue,
    };

    // const { isError, errors } = await isEmpty(userInfo);
    // if (isError) {
    //   throw errors;
    // }
    const isValidEmail = await isEmail(userInfo.email);

    if (!isValidEmail) {
      throw new CustomError("Please check your email address", 400);
    }

    if(passwordValue.length < 8){
      throw new CustomError("Password must be at least 8 characters long.",400)
    }

    if (passwordValue !== passwordConfirmationValue) {
      throw new CustomError("Passwords do not match", 400);
    }

    const client = await connection;

    if(!client){
      throw new CustomError("Could not connect to the database",500)
    }
    const { passwordConfirmation, ...newUser } = userInfo;

    //check if user already exists
    const _user = await client
    .db("startUp")
    .collection("users")
    .findOne({email:newUser.email})

    if(_user){
      throw new CustomError("user already exists, try log in",400)
    }
    const result = await client
      .db("startUp")
      .collection("users")
      .insertOne(newUser);

    if (!result) {
     throw new CustomError("Server error, could not create the account",500)
    }

    return {
      success:true,
      data:result
    }
  } catch (error: unknown) {
    const handledError = ErrorFormatter(error);
    return{
      success:false,
      errors:handledError.error
    }
  }
}
