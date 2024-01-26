"use client"
import Image from "next/image";
import SearchModal from "../SearchComponent/SearchModal";
import { useState } from "react";
import SearchForm from "../SearchComponent/SearchForm";

const Hero = () => {
    const [showModal,setShowModal]= useState(false)
  return (
    <section className="w-full  flex justify-center  rounded-md py-24  lg:w-10/12">
       {
        showModal &&  <SearchModal click={()=>setShowModal(false)}/>
       }
      <div className="w-full flex flex-col justify-center items-center ">
        <h1 className="w-full text-5xl lg:text-6xl xl:text-7xl text-center  font-extrabold text-yellow-100 ">
           Affordable Used Furniture
        </h1>
        <p className="w-10/12 lg:w-2/3  text-gray-600 p-1 py-4 text-sm md:text-base lg:p-6">
          Discover affordable style with EcoFurnish, your destination for
          quality used furniture. Buy and sell effortlessly, giving pre-loved
          pieces a second chance.
        </p>
        <div className="w-full p-2  flex justify-center items-center">
        {/* <button onClick={()=>setShowModal(true)} className="w-10/12 p-2 px-6 bg-fourth hover:bg-[#69382e] text-white">
            Search items
        </button> */}
        <SearchForm onClick={()=>{}}/>
        </div>
      </div>

      {/* <Image className="hidden lg:block" alt="home" src={"/images/hero.svg"} width={400} height={300} /> */}
    </section>
  );
};

export default Hero;
