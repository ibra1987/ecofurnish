"use client"
import { FaqType } from "@/constants/QandAs"
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Faq = ({faq}:{faq:FaqType}) => {
    const [expanded,setExpanded]=useState(false)
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <h2 onClick={()=>setExpanded(!expanded)} className="w-full bg-secondary m-1 flex justify-between cursor-pointer hover:text-white hover:bg-tertiary text-gray-700 font-medium text-xl p-6">
        <span>
        {faq.question}
        </span>
        <span>
           {expanded ? <FaChevronDown/> :<FaChevronRight/>}
        </span>
         </h2>
      <p className={`indent-3  ${expanded ? 'expanded ': "expandable" }`}>
      <strong>{'> '}</strong>{faq.answer}
      </p>

    </div>
  )
}

export default Faq