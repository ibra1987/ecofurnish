
"use client"

import { registerAction } from "@/actions/users/Register"
import { ServerActionResponse } from "@/types/app"
import toast from "react-hot-toast"



export async function registerHandler(formdata:FormData){

    const response:ServerActionResponse = await registerAction(formdata)

    if(!response.success){
        return  response.errors?.map((err:string)=>toast.error(err))
      }
      
    toast.success("Account created successfuly, check your email for account validation.")
}