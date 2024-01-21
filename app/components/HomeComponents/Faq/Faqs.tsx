import { FAQS, FaqType } from "@/constants/QandAs"
import Faq from "./Faq"



const Faqs = ({}) => {
  return (
    <div className="w-full flex  flex-col  justify-start items-center ">
    <h2 className="w-full text-left font-bold my-6 text-gray-700 text-3xl">FAQ</h2>
        {FAQS.map((faq:FaqType)=><Faq key={faq.question} faq={faq}/>)}
    </div>
  )
}

export default Faqs