"use client"

import { loginAction } from "@/actions/users/Login";
import { ServerActionResponse } from "@/types/app";
import toast from "react-hot-toast";

export async function loginHandler(formdata:FormData){

    const response :ServerActionResponse = await loginAction(formdata)

    if(!response.success && response.errors &&  response.errors?.length>0){
        const errorString = response.errors.join("-\n")
        toast.error(errorString)
    }

    console.log(response.data)
}