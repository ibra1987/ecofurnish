import EmailSubscription from './components/HomeComponents/EmailSubscription/EmailSubscription/EmailSubscription'
import Faqs from './components/HomeComponents/Faq/Faqs'
import Hero from './components/HomeComponents/Hero/Hero'
import Testimonials from './components/HomeComponents/Testimonial/Testimonials'
import LatestListings from './components/HomeComponents/latestListings/LatestListings'

export default function Home() {
  return (
    <main className="flex  mx-auto min-h-screen flex-col items-center justify-between w-full lg:w-10/12">
    <Hero/>
    <LatestListings/>
    <Testimonials/>
    <Faqs/>
    <EmailSubscription/>
    </main>
  )
}
