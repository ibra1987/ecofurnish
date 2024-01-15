"use client"

import { NAVLINKS } from '@/constants/Navlinks'
import { Navlink } from '@/types/app'
import Link from 'next/link'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";


const SmallDeviceMenu = () => {
const [showMenu,setShowMenu]=useState(false)


  return (
    <nav className="w-full   flex lg:hidden relative ">
{   showMenu ? navBar({close:()=>setShowMenu(false)}) : <RxHamburgerMenu className='p-2 hover:border rounded cursor-pointer absolute text-5xl -top-12 right-0' onClick={()=>setShowMenu(true)}/>
}
  </nav>
    )
   

}

export default SmallDeviceMenu


function navBar({close}:{close:()=>void}){
    return(
        <div className="w-full flex justify-between relative ">
            <IoCloseSharp onClick={close} className="p-2 hover:border rounded cursor-pointer absolute text-5xl -top-12 right-0" />

            <ul className="w-full flex flex-col justify-start items-start  mt-6">
        {NAVLINKS.map((link:Navlink)=>{
          return  <li className='w-full' key={link.name}>
                <Link className='hover:bg-blue-500 hover:text-white flex w-full p-3 px-2' href={link.path}>
                    {link.name}
                </Link>
            </li>
        })}
    </ul>
        </div>
    ) 
    

}