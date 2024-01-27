import { checkAuth } from "@/lib/checkAuth"
import { fetchUser } from "@/lib/fetch";
import { ServerActionResponse } from "@/types/app";
import { cookies } from "next/headers";
import React from "react";
import {redirect} from "next/navigation"

export async function AuthProvider({children}:{children:React.ReactNode}) {
  let session : ServerActionResponse | undefined;
  const sessId = cookies().get("sessId")
  if(sessId)  {
     session = await fetchUser(sessId.value as string) as ServerActionResponse
  }  
 
  return (
    <>
      {React.Children.map(children, (child) => {
        // Clone the child and pass the authentication result as a prop
        return React.cloneElement(child as React.ReactElement, { session });
      })}
    </>
  )
}
