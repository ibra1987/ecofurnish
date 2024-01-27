"use client"

import FormInput from "@/app/components/Reusables/FormInput"
import { RichTextEditor } from "../../dashboardComponents/RichTextEditor"
import { useRef, useState } from "react"
import Button from "@/app/components/Reusables/Button"




export default function AddListing() {
  const [richTextEditorFocus,setRichTextEditorFocus]=useState(false)


  return (
        <form onClick={(e)=>e.stopPropagation()} className="flex-1 bg-white">
          <h2 className="text-4xl font-bold w-full text-center my-5">Add a new listing</h2>
          <FormInput
          type="text"
          name="title"
          placeholder="Add a descriptive title"
          onChange={()=>{}}
          containerClass="w-full  bg-white  my-2 p-4 "
          cssClass="outline-none  p-2 w-full border rounded my-2 focus:border-black focus:border-2 "
          label={{
            text:"Choose a title:",
            cssClass:"font-bold p-2 ",
            htmlFor:"title"
          }}
          
          />
          <div   className="my-2 p-4 w-full flex flex-col justify-start bg-white " >
         <label className="font-bold p-2">
            Item Description:
         </label>
          <RichTextEditor  style={{minHeight:'100px'}}  onBlur={()=>setRichTextEditorFocus(false)}  onFocus={()=>setRichTextEditorFocus(true)}    className= {`${richTextEditorFocus ? ' border-black border-2 bg-white text-lg  ' : 'w-full text-lg    bg-white '}`} />

          </div>
          
           <FormInput
          type="number"
          name="price"
          placeholder="Add a small title"
          onChange={()=>{}}
          containerClass="w-full  bg-white  my-2 p-4 "
          cssClass="outline-none  p-2 w-full border rounded my-2 focus:border-black focus:border-2 "
          label={{
            text:"Set the price:",
            cssClass:"font-bold p-2 ",
            htmlFor:"price"
          }}
          />
          <Button
          text="Confirm"
          cssClass="w-full lg:w-1/3 mx-auto bg-black flex justify-center text-white font-bold p-2"
          type="submit"
          
          />
        </form>
    )
}


