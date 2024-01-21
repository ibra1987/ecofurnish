import { CustomError } from "@/lib/CustomError";
import { checkAuth } from "@/lib/checkAuth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { NextRequest, NextResponse } from "next/server";


export const dynamic = 'force-dynamic' // defaults to auto


export async function POST(request:NextRequest){
   try {
    const body =  await request.json()
    const sessId = body.sessId
    // CHECK IF COOKIE IS SENT
    if(!sessId){
    
      throw new CustomError("Please log in. here",403)
    }
    const auth = await checkAuth(sessId!)
    
    if(!auth.success)  throw  auth.errors
    return NextResponse.json(auth)
    
   } catch (error) {
    return NextResponse.json({
        success:false,
        errors:error
    })

   }
    
}