"use client"
import Image from "next/image";
import SearchModal from "../SearchComponent/SearchModal";
import { useState } from "react";

const Hero = () => {
    const [showModal,setShowModal]= useState(false)
  return (
    <section className="w-full p-10 flex justify-between py-32  rounded-md  lg:w-10/12">
       {
        showModal &&  <SearchModal click={()=>setShowModal(false)}/>
       }
      <div className="flex flex-col justify-center ">
        <h1 className="w-full text-6xl xl:text-7xl text-center  font-extrabold text-tertiary lg:text-left">
           Affordable Used Furniture
        </h1>
        <p className="w-4/5 text-gray-900 p-6">
          Discover affordable style with EcoFurnish, your destination for
          quality used furniture. Buy and sell effortlessly, giving pre-loved
          pieces a second chance. Redefine your space sustainably with
          EcoFurnish – where affordability meets quality.
        </p>
        <div className="w-full flex justify-start">
        <button onClick={()=>setShowModal(true)} className="w-10/12 p-2 px-6 bg-fourth hover:bg-[#69382e] text-white">
            Search items
        </button>
        </div>
      </div>

      <Image className="hidden lg:block" alt="home" src={"/images/hero.svg"} width={400} height={300} />
    </section>
  );
};

export default Hero;
