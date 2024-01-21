import { Navlink } from "@/types/app";


export const NAVLINKS:Navlink[] = [
    {
        name:"Home",
        path:"/",
        protected:false
        
    },
    {
        name:"Sell your furniture",
        path:"/app/add-listing",
        protected:false
    },
    {
        name:"Login",
        path:"/users/login",
        protected:false,
    },
    {
        name:"Register",
        path:"/users/register",
        protected:false
    },
    {
        name:"dashboard",
        path:"/app/dashboard",
        protected:true
    },
    
]