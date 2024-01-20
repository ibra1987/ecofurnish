
"use client"

import { registerAction } from "@/actions/users/Register"
import { isEmail } from "@/lib/isEmail"
import { ServerActionResponse } from "@/types/app"
import { NewUser } from "@/types/users"
import { RefObject } from "react"
import toast from "react-hot-toast"



export async function registerHandler(formdata:FormData,ref:RefObject<HTMLFormElement>){


  // CHECK FORMDATA PAYLOAD
  if (
    !formdata.get("email") ||
    !formdata.get("password") ||
    !formdata.get("fullName") ||
    !formdata.get("passwordConfirmation")
  ) {
    return toast.error("All fields are required.");
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
    return toast.error("Please check your email address");
  }


  // CHECK PASSWORD LENGTH
  if(passwordValue.length < 8){
    return toast.error("Password must be at least 8 characters long.")
  }

  //CHECK IF PASSWORD AND PASSWORD CONFIRMATION MATCH
  if (passwordValue !== passwordConfirmationValue) {
    return  toast.error("Passwords do not match");
  }

    const response:ServerActionResponse = await registerAction(formdata)

    if(!response.success){
        return  response.errors?.map((err:string)=>toast.error(err))
      }
      
    toast.success(response?.data?.message as string)
    ref.current?.reset()
}