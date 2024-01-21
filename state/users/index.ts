"use client";

import { LoggedInUser } from "@/types/users";

type  UserStateType = {
    state:()=>LoggedInUser,
    reset:()=>void,
    setUser:(user:LoggedInUser)=>void
}
 

const userState :UserStateType = {
    state :()=> ({
        id: "",
        fullName: "",
        email: "",
        listings: [],
        navlinks:[]
      }),
      reset:()=>{
        userState.state =()=> ({
            id: "",
            fullName: "",
            email: "",
            listings: [],
        })
      },
      setUser:(user:LoggedInUser)=>{
        userState.state =()=> ({...userState.state ,...user})
      }
};

export default userState;
