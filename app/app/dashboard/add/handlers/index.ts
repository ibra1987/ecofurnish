
"use client"

import { LISTINGS_CATEGORIES } from "@/constants/ListingCatgories";
import { LISTING_CONITION } from "@/constants/ListingCondition";
import { RefObject } from "react";
import toast from "react-hot-toast";


export async function addListingHandler(formdata:FormData){

    const title = formdata.get("title");
    const price = formdata.get("price")
    const condition = formdata.get("condition")
    const category = formdata.get("category")
    const subcategory = formdata.get("subCategory")
    const images = formdata.getAll("images")
    // const description =  document.querySelector('.ql-editor')?.innerHTML
    const description = formdata.get("description")
    if(!title || !description || !price || !images){
        toast.error("Please fill in all fields.")
        return
    }
  
    //CHECK FOR TYPES AS AN EXTRA VALIDATION STEP
    if(typeof title !== 'string' || typeof description !== 'string' ){
     
      toast.error('Some fields are missing.')
    
      return ;
    }

    if(!LISTING_CONITION.includes(condition as string)){
        toast.error('Please select item condition.')
    
        return ;
    }

    if(!Object.keys(LISTINGS_CATEGORIES).includes(category as string)){
        toast.error('Invalid category.')
    
      return ;
    }
    if(LISTINGS_CATEGORIES[subcategory as keyof typeof LISTINGS_CATEGORIES]){
        toast.error('Invalid sub category.')
      return ;
    }
  
}