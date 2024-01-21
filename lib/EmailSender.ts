import { ServerActionResponse } from "@/types/app"
import { EmailMessageType } from "@/types/users"
import sgMail from "@sendgrid/mail"



const sendgridApiKey = process.env.SENDGRID_API_KEY!
sgMail.setApiKey(sendgridApiKey)
export async function EmailSender(msg:EmailMessageType){
  "use server"

    try {
      await sgMail.send(msg)
      return true

    
        
    } catch (error:any) {
         return false
        //    throw [ "could not send verification email"]
        
    }
}