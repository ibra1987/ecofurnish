

export interface User {
   id:string,
   fullName:string,
   email:string,
   password:string,
   listings:string[]
}

export type LoggingUser = Pick<User, "email" | "password">


export type NewUser  = Pick<User ,"fullName" | "email" | "password"> & {
    passwordConfirmation:string
}

export type LoggedInUser = Pick <User,"email" |"id" | "listings" | "fullName">


export type EmailMessageType ={
    to: string,
    from: string,
    subject: string,
    text: string,
    html: string,
}