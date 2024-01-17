"use server"
import { ServerActionResponse } from "@/types/app"
import { EmailMessageType } from "@/types/users"
import sgMail from "@sendgrid/mail"



const sendgridApiKey = process.env.SENDGRID_API_KEY!
sgMail.setApiKey(sendgridApiKey)
export async function EmailSender(msg:EmailMessageType){

    try {
      await sgMail.send(msg)
      console.log("email send")
      return true

    
        
    } catch (error:any) {
         console.log(error.message)
         return false
        //    throw [ "could not send verification email"]
        
    }
}