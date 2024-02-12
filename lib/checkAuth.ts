"use server"

import { ServerActionResponse } from "@/types/app"
import { TokenValidator } from "./TokenValidator"
import { TokenGenerator } from "./TokenGenerator"
import { CustomError } from "./CustomError";
import { ErrorFormatter } from "./ErrorFormater";
import { getUserById } from "@/dataAccess/users";



export  async function checkAuth(sessId:string):Promise<ServerActionResponse>{
    try {
       

    // CHECK FOR VALIDITY OF THE COOKIE

    const result = await TokenValidator(sessId as  unknown as string) as ServerActionResponse

    if(!result.success) {
       throw new CustomError("Session expired",403)
    }


    // access valid next()
    const userId =  result?.data?._id || undefined;
    if(!userId){
      throw new CustomError("Could not verify identity, please log in",500)
    }
    const refreshTokenResult = await TokenGenerator("_id",userId.toString(),"1h")
    if(!refreshTokenResult.success && refreshTokenResult.errors){
      throw new CustomError(refreshTokenResult?.errors[0]! ?? "could not refresh token.",400)
    }

    

     const user = await getUserById(userId as string)
     if(!user) throw new CustomError("No such user.",400)
     
      return({
        success:true,
        data:{
            user,
            token:refreshTokenResult?.data?.token as string

        }
      })
        
    } catch (error) {
        const handledError = ErrorFormatter(error)
        return {
            success:false,
            errors : handledError.error
          }  
         }
}