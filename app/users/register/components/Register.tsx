
"use client"
import FormInput from "@/app/components/Reusables/FormInput";
import Link from "next/link";
import { registerHandler } from "./handlers";
import { useRef } from "react";
import Button from "@/app/components/Reusables/Button";

const Register = () => {
const ref = useRef<HTMLFormElement>(null)


  return (
    <form ref={ref} action={async(fromData)=> await registerHandler(fromData,ref)} className="min-h-screen  w-full  border rounded flex justify-center pt-10 items-start">
      <div className="border bg-white shadow-md rounded w-11/12 lg:w-2/5 p-6 flex flex-col justify-start items-start  gap-3">
         <h1 className="w-full text-center m-4 text-3xl font-bold text-gray-700">Create a free acount</h1>
          
         <FormInput
         containerClass="w-full flex flex-col justify-start items-start gap-3 "
         
         type="text"
         name="fullName"
         placeholder="Enter your full name"
         onChange={()=>{}}
         cssClass="w-full rounded border border-gray-400 p-2 outline-none focus:border-secondary"
         label={{
          text:"full name:",
          cssClass:"text-gray-700",
          htmlFor:"fullName"
         }}
         
         />
         <FormInput
         containerClass="w-full flex flex-col justify-start items-start gap-3 "
         
         type="fullName"
         name="email"
         placeholder="Enter your email"
         onChange={()=>{}}
         cssClass="w-full rounded border border-gray-400 p-2 outline-none focus:border-secondary"
         label={{
          text:"Email:",
          cssClass:"text-gray-700",
          htmlFor:"email"
         }}
         
         />
        <FormInput
        containerClass="w-full flex flex-col justify-start items-start gap-3 "
         
         type="password"
         name="password"
         placeholder="Enter your password"
         onChange={()=>{}}
         cssClass="w-full rounded border border-gray-400 p-2 outline-none focus:border-secondary"
         label={{
          text:"Password:",
          cssClass:"text-gray-700",
          htmlFor:"password"
         }}
         />
           <FormInput
        containerClass="w-full flex flex-col justify-start items-start gap-3 "
         
         type="password"
         name="passwordConfirmation"
         placeholder="Confirm your password"
         onChange={()=>{}}
         cssClass="w-full rounded border border-gray-400 p-2 outline-none focus:border-secondary"
         label={{
          text:"Password Confirmation:",
          cssClass:"text-gray-700",
          htmlFor:"passwordConfirmation"
         }}
         />
        <div className="w-full flex flex-col justify-start items-start gap-3 ">
          <Button type="submit" text="Sign in" cssClass="w-full font-medium text-fourth rounded bg-primary hover:bg-red-950 p-2 outline-none " />
           
        </div>
       <div className="flex flex-col justify-start items-start">
       <Link className="text-primary" href={"/users/login"}>
        Already have an account?
        </Link>
       
       </div>
      </div>
    </form>
  );
};

export default Register;
