"use client"

import FormInput from "@/app/components/Reusables/FormInput"
import  RichTextEditor from "../../dashboardComponents/RichTextEditor"
import {  useRef, useState } from "react"
import Button from "@/app/components/Reusables/Button"
import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories"
import { AddListingAction } from "@/actions/app/listings/AddListing"
import userState from "@/state/users"
import { addListingHandler } from "../handlers"
import { LISTING_CONITION } from "@/constants/ListingCondition"




export default function AddListing() {
  const [richTextEditorFocus,setRichTextEditorFocus]=useState(false)
  const [description,setDescription]=useState("")
 
  const userId = userState.state().id
  


  return (
        <form  action={(formData:FormData)=>{
          formData.append("description",description)

          AddListingAction(formData)
        }}   className="flex-1 bg-inherit flex flex-col justify-start space-y-3   rounded ">
          <h2 className="text-4xl font-bold w-full text-center ">Add a new listing</h2>
          <FormInput
          type="text"
          name="title"
          id="title"
          placeholder="Add a descriptive title"
          containerClass="w-full    p-2 "
          cssClass="outline-none  p-2 w-full border rounded   focus:border-black focus:border-2 "
          label={{
            text:"Choose a title:",
            cssClass:" block font-bold p-2 ",
            htmlFor:"title"
          }}
          
          />
          <div   className=" p-2 w-full flex flex-col justify-start " >
         <label htmlFor="description" className=" block font-bold p-2">
            Item Description:
         </label>
          <RichTextEditor 
          onChange={(value, delta, source, editor) =>setDescription(editor.getHTML())}
          id="description"
          value={description}
          style={{minHeight:'100px'}}  
          onBlur={()=>setRichTextEditorFocus(false)}  
          onFocus={()=>setRichTextEditorFocus(true)}    
          className= {`${richTextEditorFocus ? ' border-black border-2 text-lg bg-white  ' : 'w-full text-lg bg-white    '}`} />

          </div>
          <input type="hidden" name="userId" value={userId} />
           <FormInput
          type="number"
          id="price"
          name="price"
          placeholder="0"
          containerClass="w-full    p-2 "
          cssClass="outline-none  p-2 w-full border rounded   focus:border-black focus:border-2 "
          label={{
            text:"Set the price:",
            cssClass:" block font-bold p-2 ",
            htmlFor:"price"
          }}
          />
           <div className="w-full    p-2 ">
          <label htmlFor="condition" className=" block font-bold p-2">
            Item condition:
          </label>
         <select
          id="condition" name="condition" className="outline-none bg-white  p-2 w-full border rounded   focus:border-black focus:border-2">
          <option className="text-gray-400"  disabled >
                    Select item condition
                </option>
              {LISTING_CONITION.map((conditionItem:string)=>(
                <option key={conditionItem}>
                  {conditionItem}
                </option>
              ))}
          </select>
         </div>
         <div className="w-full    p-2 ">
          <label htmlFor="catefgory" className=" block font-bold p-2">
            Item category:
          </label>
         <select   id="category" name="category" className="outline-none bg-white p-2 w-full border rounded   focus:border-black focus:border-2">
          <option className="text-gray-400"  disabled={true} value={""}>
                    choose a category
                </option>
              {Object.keys(LISTINGS_CATEGORIES).map((cat:string)=>(
                <option value={cat} key={cat}>
                  {cat}
                </option>
              ))}
          </select>
         </div>
         <div className="w-full    p-2 ">
          <label htmlFor="subCategory" className=" block font-bold p-2">
            Item subactegpry:
          </label>
         <select   id="subCategory" name="subCategory" className="outline-none bg-white  p-2 w-full border rounded   focus:border-black focus:border-2">
              <option className="text-gray-400"  disabled={true} value={""}>
                   choose a sub category
              </option>
            {LISTINGS_CATEGORIES["Accent Furniture"].map((subCategory:string)=>(
              <option  key={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
         </div>
          <FormInput
          type="file"
          id="images"
          allowMultiple={true}
          name="images"
          placeholder=""
          containerClass="w-full    p-2 "
          cssClass="outline-none  p-2 w-full border rounded   focus:border-black focus:border-2 "
          label={{
            text:"Add images:",
            cssClass:" block font-bold p-2 ",
            htmlFor:"images"
          }}
          />
         <div className="w-full flex justify-end space-x-6 px-10">
         <Button
          text="Publish"
          cssClass=" bg-secondary flex justify-center text-white  block font-bold p-2 rounded  w-1/2 md:1/3 lg:w-1/4"
          type="submit"
          
          />
           <Button
          
          text="Save for later"
          cssClass=" bg-gray-600 flex justify-center text-white  block font-bold p-2 rounded  w-1/2 md:1/3 lg:w-1/4"
          type="button"
          
          />
         </div>
        </form>
    )
}


