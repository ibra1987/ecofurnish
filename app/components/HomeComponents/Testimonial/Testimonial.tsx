import Image from "next/image"


const Testimonial = () => {
   
  return (
<div  className="w-full flex flex-col justify-start items-center  p-4 rounded bg-primary text-secondary">
    <div className="px-6 w-full flex justify-start items-center ">
    <div className=" relative w-[120px] h-[120px] rounded-full p-2 border border-yellow-400">
        <Image className="rounded-full" alt="man_testimonial" src={"/images/man.jpg"} fill={true}/>
    </div>
   <div className="mx-2 flex flex-col justify-start items-center">
   <h3 className=" ">John Doe</h3>
    <Image src="/images/5stars.png" alt="5 stars rating" width={60}  height={30}/>
   </div>
    </div>

    <p className="w-fUll p-6 indent-3 italic text-sm">
    Selling my old sofa on EcoFurnish was a breeze! The user-friendly interface made listing my sofa quick and easy. I received inquiries from local buyers almost immediately, and the built-in messaging system simplified communication. The location-based search connected me with nearby buyers, and the secure payment system streamlined the transaction process. EcoFurnish made selling my sofa a hassle-free experience – highly recommend!
    </p>
</div>  )
}

export default Testimonial