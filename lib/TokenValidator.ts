'use server'
import { ServerActionResponse } from "@/types/app";
import { JsonWebTokenError, Jwt, JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken"

export async function TokenValidator(token:string):Promise<ServerActionResponse>{

    const  jwtSecret = process.env.JWT_SECRET!

    return new Promise((resolve,reject)=>{
        return  jwt.verify(token,jwtSecret,(err,decoded)=>{
              if(err instanceof JsonWebTokenError) reject({
                success:false,
                errors:[err.message]

              })
              if(decoded) resolve({
                success:true,
                data: typeof decoded === "string" ? {_id:decoded} : decoded
              })
        })
           
    })
}