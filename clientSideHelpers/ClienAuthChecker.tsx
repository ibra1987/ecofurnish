"use client"

import { NAVLINKS } from "@/constants/Navlinks";
import userState from "@/state/users";
import { Navlink, ServerActionResponse } from "@/types/app";
import { LoggedInUser } from "@/types/users";




export  function ClientAuthChecker({result}:{result:ServerActionResponse}) {
    userState.setUser(result.data?.user as LoggedInUser)

    return <></>
}