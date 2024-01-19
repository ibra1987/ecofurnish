
import { ServerActionResponse } from "@/types/app";
import jwt from "jsonwebtoken"

export async function TokenGenerator(name:string,payload:string,time:string) : Promise<ServerActionResponse> {
 
  const jwtSecret = process.env.JWT_SECRET
    if(!jwtSecret){
        return {
            success:false,
            errors:["could not create a token."]
        }
    } 
  // generate a token
 try {
  return new Promise((resolve, reject) => {
    const jwtPayload = { [name]: payload };

    jwt.sign(jwtPayload,jwtSecret, { expiresIn: time }, (err, token) => {
      if (err) {
        
        reject({
          success:false,
          errors:[err.message]
        });
      } else {
        resolve({
            success:true,
            data:{
              _id:token! as string
            }

        });
      }
    });
  });
  
 } catch (error:any) {
  return ({
    errors:[error.message],
    success:false
})
 }
}