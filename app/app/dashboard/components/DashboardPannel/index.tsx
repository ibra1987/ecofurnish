"use client"
import Button from "@/app/components/Reusables/Button"
import userState from "@/state/users"
import ModalContainer from "../ModalContainer"
import { useState } from "react"



export function  DashboardPannel() {
  const [show,setShow] = useState(false)
    
    const user = userState.state()
    
  return (
    <div className="w-full p-4 bg-white border flex flex-col justify-start lg:w-1/4 text-gray-600">
        {show && <ModalContainer onClick={()=>setShow(!show)}/>}
        <span className="border-b">
          Welcome back {user.fullName.toLocaleUpperCase()}
        </span> 
        <Button
           type="button"
           text="Add new listing"
           cssClass=" w-full bg-tertiary text-white p-2 hover:bg-gray-700"
           onClick={()=>setShow(!show)}
        /> 
        <span>
          Total listings: {user.listings?.length || 0}
        </span> 
        

        
        </div>
  )
}

export default DashboardPannel