"use client"

import { useFormStatus } from "react-dom"

export default function Button({text,cssClass}:{text:string,cssClass:string}) {

    const { pending } = useFormStatus()   
     return (
    <button  type="submit" className={cssClass} disabled={pending}>
   {text}

    </button>
  )
}

