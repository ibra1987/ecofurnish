"use client"

import { NAVLINKS } from '@/constants/Navlinks'
import { Navlink } from '@/types/app'
import Link from 'next/link'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import userState from '@/state/users';
import { usePathname } from 'next/navigation';
import { LoggedInUser } from '@/types/users';
import { Logout } from '@/actions/users/Logout';


const SmallDeviceMenu = ({user}:{user:LoggedInUser | null}) => {
    

const [showMenu,setShowMenu]=useState(false)


  return (
    <nav className="w-full  flex lg:hidden relative ">
{   showMenu ? <Navbar user={user} close={()=>setShowMenu(false)}/> : <RxHamburgerMenu className='p-2 hover:border rounded cursor-pointer absolute text-5xl -top-12 right-0' onClick={()=>setShowMenu(true)}/>
}
  </nav>
    )
   

}

export default SmallDeviceMenu

function Navbar({close,user}:{close:()=>void,user:LoggedInUser |  null}){
    
const privateNavlinks = NAVLINKS.filter((link:Navlink)=>link.protected ===true)
const publicNavlinks =  NAVLINKS.filter((link:Navlink)=>link.protected ===false)

const navlinks = user ? privateNavlinks : publicNavlinks

    return(
        <div className="w-full flex justify-between relative ">
            <IoCloseSharp onClick={close} className="p-2 hover:border rounded cursor-pointer absolute text-5xl -top-12 right-0" />

            <ul className="w-full flex flex-col justify-start items-start  mt-6">
        {navlinks.map((link:Navlink)=>{
          return  <li className='w-full px-4' key={link.name}>
                <Link className='hover:bg-primary hover:text-white flex w-full p-3 px-2' href={link.path}>
                    {link.name}
                </Link>
            </li>
        })}
         {user &&   <li>
                    <button onClick={()=>Logout()}>
                        Logout
                    </button>
                </li>}
    </ul>
        </div>
    ) 
    

}