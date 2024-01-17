
"use client"

import { registerAction } from "@/actions/users/Register"
import { ServerActionResponse } from "@/types/app"
import { RefObject } from "react"
import toast from "react-hot-toast"



export async function registerHandler(formdata:FormData,ref:RefObject<HTMLFormElement>){

    const response:ServerActionResponse = await registerAction(formdata)

    if(!response.success){
        return  response.errors?.map((err:string)=>toast.error(err))
      }
      
    toast.success(response.data as string)
    ref.current?.reset()
}