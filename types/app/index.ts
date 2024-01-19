import { CustomError } from "@/lib/CustomError"


export type Navlink={
    name:string,
    path:string
}

export enum DatabaseTables {
     users,
     listings
}

export type FormFieldType = {
    [key : string]:string
}

export type FormFieldErrorType = FormFieldType & {
    error:string
}

export  type ServerActionResponse = {
    success:boolean,
    errors?: string[],
    data?:{
        [key: string]: string | Object
    }
} 
