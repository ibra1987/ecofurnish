"use server";

import { cookies } from "next/headers";
import { LoggingUser, NewUser, User } from "@/types/users";
import { CustomError } from "@/lib/CustomError";
import { isEmail } from "@/lib/isEmail";
import { ErrorFormatter } from "@/lib/ErrorFormater";
import { ServerActionResponse } from "@/types/app";
import { TokenGenerator } from "@/lib/TokenGenerator";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/dataAccess/users";
import { SetCookie } from "@/lib/setCookie";

export async function loginAction(
  formdata: FormData
): Promise<ServerActionResponse> {
  //
  try {
    if (!formdata.get("email") || !formdata.get("password")) {
      throw new CustomError("email and password are required.", 400);
    }
    const emailValue = formdata.get("email");
    const passwordValue = formdata.get("password");
    if (typeof emailValue !== "string" || typeof passwordValue !== "string") {
      throw new CustomError("email and password are required.", 400);
    }

    const userInfo: LoggingUser = {
      email: emailValue,
      password: passwordValue,
    };

    // const {isError,errors} =  await isEmpty(userInfo)
    // if(isError){

    //   throw errors
    // }
    const isValidEmail = await isEmail(userInfo.email);

    if (!isValidEmail) {
      throw new CustomError("Please check your email address", 400);
    }

    const user = await getUserByEmail(userInfo.email);

    if (!user) {
      throw new CustomError("No such user in the database", 404);
    }

    const passwordMatch = await bcrypt.compare(
      userInfo.password,
      user.password
    );

    if (!passwordMatch) {
      throw new CustomError("Please check your email/password", 400);
    }

    const { password, ..._user } = user;

    const result = await TokenGenerator("_id", user.id.toString(), "1h");
    // CHECK IF TOKEN HAS NOY BEEN GENERATED
    if (!result.success && result.errors && result.errors.length > 0) {
      throw new CustomError(result?.errors[0], 500);
    }

    await SetCookie("sessId", result?.data?.token as string);

    return {
      success: true,
      data: {
        user: _user,
        token: result?.data?.token as string,
      },
    };
  } catch (error: unknown) {
    const handledError = ErrorFormatter(error);

    return {
      success: false,
      errors: handledError.error,
    };
  }
}
