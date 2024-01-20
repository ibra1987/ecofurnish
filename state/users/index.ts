"use client"

import { LoggedInUser } from "@/types/users"




const _user :LoggedInUser ={
    id:"",
    fullName:"",
    email:"",
    listings:[]
}


const userState ={

    initialState: ()=>{
        if(typeof window !== "undefined"){
            return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")! ) as LoggedInUser :_user 
        }
    },
    setUser:(userInfo:LoggedInUser)=>{
        localStorage.setItem("user",JSON.stringify(userInfo))
        userState.initialState=()=> userInfo
    },
    logOut:()=>{
        localStorage.removeItem("user")
        userState.initialState =()=> _user;
    }

}

export default userState



