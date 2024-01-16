import { loginAction } from "@/actions/users/Login";
import toast from "react-hot-toast";


export async function loginHandler(formdata:FormData){

    const response = await loginAction(formdata)

    if(response?.error){
        toast.error(response?.error as string)
    }
}