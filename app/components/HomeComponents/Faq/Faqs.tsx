import { FAQS, FaqType } from "@/constants/QandAs"
import Faq from "./Faq"



const Faqs = ({}) => {
  return (
    <div className="w-full md:w-3/5 flex flex-col justify-start items-center my-24 ">

        {FAQS.map((faq:FaqType)=><Faq key={faq.question} faq={faq}/>)}
    </div>
  )
}

export default Faqs