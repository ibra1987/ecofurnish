"use client"
import { loginAction } from "@/actions/users/Login";
import FormInput from "@/app/components/Reusables/FormInput";
import { LoggingUser } from "@/types/users";
import Link from "next/link";
import { useRef, useState } from "react";
import { loginHandler } from "../handlers";

const Login = () => {
 const ref = useRef(null)
  return (
    <form ref={ref} action={(formData)=>loginHandler(formData,ref)} className="min-h-screen w-full bg-primary flex justify-center pt-20 items-start">
      <div className="bg-secondary w-11/12 lg:w-2/5 p-6 flex flex-col justify-start items-start rounded gap-3">
         <h1 className="w-full text-center m-4 text-3xl font-bold text-gray-700">Log in to your account</h1>

         <FormInput
         containerClass="w-full flex flex-col justify-start items-start gap-3 "
         type="email"
         name="email"
         placeholder="Enter your email" 
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
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
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
         label={{
          text:"Password:",
          cssClass:"text-gray-700",
          htmlFor:"password"
         }}
         />
        <div className="w-full flex flex-col justify-start items-start gap-3 ">
          <button className="w-full font-medium text-secondary rounded bg-fourth hover:bg-red-950 p-2 outline-none ">
            Sign In
          </button>
        </div>
       <div className="flex flex-col justify-start items-start">
       <Link className="text-primary" href={"/users/reset-password"}>
        forgot password?
        </Link>
        <Link className="text-primary" href={"/users/reset-password"}>
          don&apos;t have an account?
       </Link>
       </div>
      </div>
    </form>
  );
};

export default Login;
