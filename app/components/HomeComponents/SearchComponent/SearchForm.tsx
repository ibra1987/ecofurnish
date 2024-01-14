"use client"

import { FaWindowClose } from "react-icons/fa"


const SearchForm = ({onClick}:{onClick:()=>void}) => {
  return (
    <form className="w-full lg:w-3/5 p-20 rounded bg-secondary flex relative">
        <FaWindowClose onClick={onClick} className="absolute top-4 right-4 text-2xl text-red-500 hover:cursor-pointer"/>
       <div className="w-full flex border rounded-md p-1 bg-white">
       <input className="flex-1 rounded-md border-none outline-none p-2 "  type="text" placeholder="Search items"/>
        <button className="px-8 py-2 bg-fourth hover:bg-tertiary text-white rounded-md">
            Search
         </button>
       </div>
    </form>
  )
}

export default SearchForm