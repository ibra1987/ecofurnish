"use client"
import { FaqType } from "@/constants/QandAs"
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Faq = ({faq}:{faq:FaqType}) => {
    const [expanded,setExpanded]=useState(false)
  return (
    <div className="w-full lg:w-3/5 flex flex-col justify-start items-start text-tertiary p-2">
      <h2 onClick={()=>setExpanded(!expanded)} className="w-full flex justify-between border-b border-b-gray-400  cursor-pointer  hover:text-white hover:bg-secondary  font-medium text-xl p-4">
        <span>
        {faq.question}
        </span>
        <span>
           {expanded ? <FaChevronDown/> :<FaChevronRight/>}
        </span>
         </h2>
      <p className={`indent-2 p-2 py-4  text-tertiary border w-full text-lg  ${expanded ? 'expanded ': "expandable" }`}>
      <strong>{' '}</strong>{faq.answer}
      </p>

    </div>
  )
}

export default Faq