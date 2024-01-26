"use client"

import { useFormStatus } from "react-dom"

export default function Button({onClick,text,cssClass,type="submit"}:{onClick?:()=>void,text:string,cssClass:string,type:'reset' | 'submit' | 'button' | undefined}) {

    const { pending } = useFormStatus()   
     return (
    <button onClick={onClick}  type={type} className={cssClass} area-disabled={pending.toString()}>
    {pending ? "Processing..." : text}

    </button>
  )
}

