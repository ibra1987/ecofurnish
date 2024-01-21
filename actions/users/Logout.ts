"use server"

import { DeleteCookie } from "@/lib/DeleteCookie"
import { redirect } from "next/navigation"


export async function Logout(){

    DeleteCookie("sessId")
    redirect("/users/login")

}