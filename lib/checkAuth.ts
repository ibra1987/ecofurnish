
import { ServerActionResponse } from "@/types/app"
import { cookies } from "next/headers"
import { TokenValidator } from "./TokenValidator"
import { TokenGenerator } from "./TokenGenerator"
import { SetCookie } from "@/actions/users/setCookie";
import { CustomError } from "./CustomError";
import { ErrorFormatter } from "./ErrorFormater";
import { getUserById } from "@/dataAccess/users";
import next from "next";


export  async function checkAuth():Promise<ServerActionResponse>{

    try {
        const sessId = cookies().get("sessId")


    // CHECK IF COOKIE IS SENT
    if(!sessId){

      throw new CustomError("Please log in",403)
    }

    // CHECK FOR VALIDITY OF THE COOKIE

    const result = await TokenValidator(sessId.value) as ServerActionResponse

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
     
     await SetCookie("sessId",refreshTokenResult?.data?._id as string)
      return({
        success:true,
        data:{
            user,

        }
      })
        
    } catch (error) {
        const handledError = ErrorFormatter(error)
   console.log(handledError)
        return {
            success:false,
            errors : handledError.error
          }    }
}