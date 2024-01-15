"use client"
import { NAVLINKS } from '@/constants/Navlinks'
import { Navlink } from '@/types/app'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkClass = " p-3 border-b border-transparent "
const activeClass = " text-gray-500 border-b border-b-gray-400"
const specialClass = " bg-primary text-white rounded-md hover:bg-primary-light "
const LargeDeviceMenu = () => {
    const pathname = usePathname()
    return (
        <nav className="hidden lg:block  ">
            <ul className="w-full flex  gap-6 justify-center items-center">
                {NAVLINKS.map((link:Navlink)=>{
                  return  <li key={link.name}>
                        <Link href={link.path} className={`${linkClass} + ${pathname === link.path && link.path !== "/users/register" ? activeClass : link.path === "/users/register"? specialClass  : ""}`}>
                            {link.name}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
      )
}

export default LargeDeviceMenu