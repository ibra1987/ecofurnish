"use client";

/*
THIS IS FUNCTION RUNS ON CLIENT 
IT PERFORMS CLIENT SIDE FORM VALIDATION 
IT THEN SENDS FORMDATA TO A SERVER ACTION THAT PERFORMS SAME VAKIDATION
BESIDES FORMDAT, THE FUCTION ALSO ACCEPTS REF AS A REFERENCE TO THE FORM SO WE CAN EMPTY IT WHEN NEEDED

*/

import { Navigate } from "@/actions/app/Navigate";
import { loginAction } from "@/actions/users/Login";
import { isEmail } from "@/lib/isEmail";
import { isEmpty } from "@/lib/isEmpty";
import { ServerActionResponse } from "@/types/app";
import { LoggingUser } from "@/types/users";
import { RefObject } from "react";
import toast from "react-hot-toast";

//
export async function loginHandler(
  formdata: FormData,
  ref: RefObject<HTMLFormElement>
) {
  //EXTRACT VAKUE FROM FORM DATA
  const emailValue = formdata.get("email");
  const passwordValue = formdata.get("password");

  //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
  if (typeof emailValue !== "string" || typeof passwordValue !== "string") {
    toast.error("email and password are required.");

    return;
  }

  // CONSTRUCT USERINFO OBJECT FROM FORMDATA
  const userInfo: LoggingUser = {
    email: emailValue,
    password: passwordValue,
  };

  // CHECK IF FIELDS ARE EMPTY
  const { isError, errors } = await isEmpty(userInfo);
  if (isError) {
    const errorString = errors.map((err) => err.error).join("\n");
    toast.error(errorString);
    return;
  }

  //CHECK IF EMAIL IS A VALID EMAIL ADDRESS
  const isValidEmail = await isEmail(userInfo.email);

  if (!isValidEmail) {
    return toast.error("Please check your email.");
  }
  //CHECK PASSWORD LENGTH - MUST BE AT LEAST 8 CHARACTERS LONG
  if (userInfo.password.length < 8) {
    return toast.error("Password must be at least 8 characters long.");
  }

  // SEND FORMDATA TO THE SERVER ACTION

  const response: ServerActionResponse = await loginAction(formdata);

  if (!response.success && response.errors && response.errors?.length > 0) {
    const errorString = response.errors.join("-\n");
    toast.error(errorString);
    return;
  }
  //IF NO ERRORS WE RESET THE FORM FIELDS AND REDIRECT TO DASHBOARD
  ref.current?.reset();
  Navigate("/inside/dashboard?referrer=loginform");
}
