import { checkAuth } from "@/lib/checkAuth"
import { redirect } from "next/navigation"

export default  async  function page() {
const auth = await checkAuth()

if(!auth?.success){
  redirect ('/users/login')
}
  

    return (
    <main>
       {/* <DashboardContainer  /> */}
       {JSON.stringify(auth.data)}
    </main>
  )
}

