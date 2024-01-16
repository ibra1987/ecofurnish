"use server"

import { isEmpty } from "@/lib/isEmpty";
import { LoggingUser, NewUser, User } from "@/types/users";
import { CustomError } from "@/lib/CustomError";
import { isEmail } from "@/lib/isEmail";
import connection from "@/DB/dbConnection";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";


export  async function loginAction(formdata:FormData):Promise<ServerActionResponse>{
   
   //
   try {
      if (!formdata.get("email") || !formdata.get("password")) {
     
         throw new CustomError("email and password are required.",400)
         
        }
        const emailValue = formdata.get("email");
        const passwordValue = formdata.get("password");
        if(typeof emailValue !== 'string' || typeof passwordValue !== 'string'){
         
         throw new CustomError('email and password are required.',400)
        }
     
        const  userInfo: LoggingUser ={
           email:emailValue,
           password:passwordValue
        } ;
     
    // const {isError,errors} =  await isEmpty(userInfo)
    // if(isError){
       
    //   throw errors
    // }
   const isValidEmail = await isEmail(userInfo.email)

   if(!isValidEmail){
    throw new CustomError("Please check your email address",400)
   }

   const client =await connection

   const user =  await client?.db("startUp").collection("users").findOne({email:userInfo.email})

   if(!user){
    throw new CustomError("No such user in the database",404)
   }
    return {
      success:true,
      data:user
    }
   } catch (error:unknown) {
   
      const handledError = ErrorFormatter(error)

       return {
         success:false,
         errors : handledError.error
       }

}
     

}