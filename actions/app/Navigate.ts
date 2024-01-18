
"use server"

import { redirect } from "next/navigation"


export async function Navigate(path:string) {
    redirect(`${path}`)
}