"use client"

import { Navigate } from "@/actions/app/Navigate"
import userState from "@/state/users"
import { LoggedInUser } from "@/types/users"
import { useEffect } from "react"
import DashboardPannel from "./DashboardPannel"


export function UserDashboard({user}:{user:LoggedInUser}) {

if(!user) return <div>...loading</div>
userState.setUser(user)
  return (
    <div>
        <DashboardPannel/>
    </div>
  )
}

export default UserDashboard