import ErrorBoundary from "./error"
import UserDashboard from "./components/UserDashboard"
import { fetchUser } from "@/lib/fetch"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export default async function page() {
  const sessId = cookies().get("sessId")
  if(!sessId) redirect("/users/login")
const res = await fetchUser(sessId.value as string)
if(!res.success) redirect("/users/login")


    return (
    <main>
       
        <UserDashboard user={res.data?.user}/>
       
    </main>
  )
}

