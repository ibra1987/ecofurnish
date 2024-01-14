import Testimonial from "./Testimonial"



const Testimonials = () => {
    
  return (
   <>
   <h2 className="block my-6 w-full text-left font-bold  text-gray-700 text-3xl ">What People Say</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
    </div>
   </>
  )
}

export default Testimonials