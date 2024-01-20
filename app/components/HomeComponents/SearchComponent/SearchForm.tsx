"use client"

import { FaWindowClose } from "react-icons/fa"


const SearchForm = ({onClick}:{onClick:()=>void}) => {
  return (
    <form className="w-11/12 flex justify-center items-center  rounded   ">
        {/* <FaWindowClose onClick={onClick} className="absolute top-4 right-4 text-2xl text-red-500 hover:cursor-pointer"/> */}
       <div className="w-full flex justify-center items-center p-2 bg-white rounded">
         <input type="text" placeholder="Search listings..."  className="w-3/4 p-2 outline-none border-none"/>
         <button className="w-1/4 p-2 bg-primary hover:scale-105 transition cursor-pointer duration-150 ease-in-out rounded text-white outline-none border-none">
          Search
         </button>
        </div>
    </form>
  )
}

export default SearchForm