"use client"

import { loginAction } from "@/actions/users/Login";
import { ServerActionResponse } from "@/types/app";
import toast from "react-hot-toast";

export async function loginHandler(formdata:FormData){

    const response :ServerActionResponse = await loginAction(formdata)

    if(!response.success){
      return  response.errors?.map((err:string)=>toast.error(err))
    }

    console.log(response.data)
}