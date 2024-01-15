import FormInput from "@/app/components/Reusables/FormInput";
import Link from "next/link";

const Register = () => {
  return (
    <form className="min-h-screen w-full bg-primary flex justify-center pt-10 items-start">
      <div className="bg-secondary w-11/12 lg:w-2/5 p-6 flex flex-col justify-start items-start rounded gap-3">
         <h1 className="w-full text-center m-4 text-3xl font-bold text-gray-700">Create a free acount</h1>
          
         <FormInput
         containerClass="w-full flex flex-col justify-start items-start gap-3 "
         value=""
         type="text"
         name="fullName"
         placeholder="Enter your full name"
         onChange={()=>{}}
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
         label={{
          text:"full name:",
          cssClass:"text-gray-700",
          htmlFor:"fullName"
         }}
         
         />
         <FormInput
         containerClass="w-full flex flex-col justify-start items-start gap-3 "
         value=""
         type="fullName"
         name="email"
         placeholder="Enter your email"
         onChange={()=>{}}
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
         label={{
          text:"Email:",
          cssClass:"text-gray-700",
          htmlFor:"email"
         }}
         
         />
        <FormInput
        containerClass="w-full flex flex-col justify-start items-start gap-3 "
         value=""
         type="password"
         name="password"
         placeholder="Enter your password"
         onChange={()=>{}}
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
         label={{
          text:"Password:",
          cssClass:"text-gray-700",
          htmlFor:"password"
         }}
         />
           <FormInput
        containerClass="w-full flex flex-col justify-start items-start gap-3 "
         value=""
         type="password"
         name="passwordConfirmation"
         placeholder="Confirm your password"
         onChange={()=>{}}
         cssClass="w-full rounded border p-2 outline-none focus:border-primary"
         label={{
          text:"Password Confirmation:",
          cssClass:"text-gray-700",
          htmlFor:"passwordConfirmation"
         }}
         />
        <div className="w-full flex flex-col justify-start items-start gap-3 ">
          <button className="w-full font-medium text-secondary rounded bg-fourth hover:bg-red-950 p-2 outline-none ">
            Sign In
          </button>
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
