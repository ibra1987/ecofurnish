
import { cookies } from "next/headers"


export async function SetCookie(name:string,value:string) {
"use server"
    cookies().set({
        name,
        value,
        httpOnly: true,
       
      })
}