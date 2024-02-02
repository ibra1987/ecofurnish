"use client"

import { AddListingAction } from "@/actions/app/listings/AddListing"
import { useFormStatus } from "react-dom"

type ButtonProps = {
  onClick?:(e:MouseEvent)=>void,
  text:string,
  cssClass:string,
  type:'reset' | 'submit' | 'button' | undefined,
  formAction?:(formdata:FormData)=>void
}

export default function Button({onClick,text,cssClass,type="submit",formAction}:ButtonProps) {


    const { pending } = useFormStatus()   
     return (
    <button formAction={formAction} onClick={()=>onclick}  type={type} className={cssClass} area-disabled={pending.toString()}>
    {type === "submit" ? pending ? "Processing..." : text:text }

    </button>
  )
}

