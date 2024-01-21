import EmailSubscription from "./components/HomeComponents/EmailSubscription/EmailSubscription/EmailSubscription";
import Faqs from "./components/HomeComponents/Faq/Faqs";
import Hero from "./components/HomeComponents/Hero/Hero";
import Testimonials from "./components/HomeComponents/Testimonial/Testimonials";
import LatestListings from "./components/HomeComponents/latestListings/LatestListings";
import { cookies } from "next/headers";
import { fetchUser } from "@/lib/fetch";


export  default  function Home() {
 
  return (
    <main className="flex  mx-auto min-h-screen flex-col items-center justify-between w-full ">

      <div className="w-full bg-secondary flex justify-center items-center">
        <Hero />
      </div>
        <LatestListings />
        <Testimonials />

      <Faqs />
      <EmailSubscription />
    </main>
  );
}


