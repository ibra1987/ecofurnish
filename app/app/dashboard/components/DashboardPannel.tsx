import userState from "@/state/users"



export function  DashboardPannel() {
    const user = userState.state()
  return (
    <div>{
        user.email
    }</div>
  )
}

export default DashboardPannel