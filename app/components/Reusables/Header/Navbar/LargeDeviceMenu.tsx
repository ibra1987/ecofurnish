"use client"
import { NAVLINKS } from '@/constants/Navlinks'
import userState from '@/state/users'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navlink } from '@/types/app'
import { LoggedInUser } from '@/types/users'
import { Logout } from '@/actions/users/Logout'

const linkClass = " p-3 border-b border-transparent "
const activeClass = " text-gray-500 border-b border-b-gray-400"
const specialClass = " bg-primary text-white rounded-md hover:bg-primary-light "
const LargeDeviceMenu = ({user}:{user:LoggedInUser | null}) => {
    const pathname = usePathname()
    
    
    const privateNavlinks = NAVLINKS.filter((link:Navlink)=>link.protected ===true)
    const publicNavlinks =  NAVLINKS.filter((link:Navlink)=>link.protected ===false)
    
    const navlinks = user ? privateNavlinks : publicNavlinks
    return (
        <nav className="hidden lg:block  ">
            <ul className="w-full flex  gap-6 justify-center items-center">
                {navlinks.map((link:Navlink)=>{
                  return  <li key={link.name}>
                        <Link href={link.path} className={`${linkClass} + ${pathname === link.path && link.path !== "/users/register" ? activeClass : link.path === "/users/register"? specialClass  : ""}`}>
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
        </nav>
      )
}

export default LargeDeviceMenu