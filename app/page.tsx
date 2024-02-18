import EmailSubscription from "./components/HomeComponents/EmailSubscription/EmailSubscription/EmailSubscriptionComponent";
import Faqs from "./components/HomeComponents/Faq/FaqsComponent";
import Hero from "./components/HomeComponents/Hero/HeroComponent";
import Testimonials from "./components/HomeComponents/Testimonial/TestimonialsComponent";
import LatestListings from "./components/HomeComponents/latestListings/LatestListingsComponent";

export default function Home() {
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
