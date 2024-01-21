'use server'
import { cookies } from "next/headers"


export async  function GetCookie(name:string) {
    const cookie = await  cookies().get(name)

    if(!cookie) return 
    return cookie
}