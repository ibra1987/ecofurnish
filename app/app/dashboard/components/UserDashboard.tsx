"use client"

import { Navigate } from "@/actions/app/Navigate"
import userState from "@/state/users"
import { LoggedInUser } from "@/types/users"
import DashboardPannel from "./DashboardPannel"


export function UserDashboard({user}:{user:LoggedInUser}) {

if(!user) return <div>...loading</div>
userState.setUser(user)
  return (
    <div className="w-full flex justify-center items-start my-6">
        <DashboardPannel/>
        <div className="w-full lg:w-3/4
        
        ">
          Listing here
        </div>
    </div>
  )
}

export default UserDashboard