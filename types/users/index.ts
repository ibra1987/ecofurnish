

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