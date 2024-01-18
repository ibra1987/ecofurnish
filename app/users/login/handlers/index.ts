"use client";

import { Navigate } from "@/actions/app/Navigate";
import { loginAction } from "@/actions/users/Login";
import { ServerActionResponse } from "@/types/app";
import { RefObject } from "react";
import toast from "react-hot-toast";

export async function loginHandler(
  formdata: FormData,
  ref: RefObject<HTMLFormElement>
) {
  const response: ServerActionResponse = await loginAction(formdata);

  if (!response.success && response.errors && response.errors?.length > 0) {
    const errorString = response.errors.join("-\n");
    toast.error(errorString);
    return ;
  }

  ref.current?.reset();
  Navigate('/inside/dashboard')
}
