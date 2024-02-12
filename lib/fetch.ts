import { CustomError } from "./CustomError"

export const fetchUser = async(sessId:string)=>{
   try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/auth/',{
        method:'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body:JSON.stringify({
          sessId
        })
      })
      if (!res.ok) {
          throw new CustomError('there was an error',400)
      }
      const auth = await res.json()
  
      return auth
    
   } catch (error) {
    throw error
   }
  }


