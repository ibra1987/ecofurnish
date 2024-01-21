'use server'
import { cookies } from "next/headers"


export async function SetCookie(name:string,value:string) {
      cookies().set({
        name,
        value,
        httpOnly: true,
       
      })
}