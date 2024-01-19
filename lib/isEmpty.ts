import { FormFieldErrorType, FormFieldType } from "@/types/app";




export async function isEmpty(fields:FormFieldType) {
      let errors:FormFieldErrorType[] = []
      Object.keys(fields).map((key:string)=>{
        if(!fields[key] || fields[key].trim().length === 0){
            errors.push({
                name:key,
                value:fields[key],
                error:`${key} can not be blank.`
            }) 
        }
    })
     if(errors.length>0){
        return {
            isError:true,
            errors
        }
        
     }
    return {
        isError:false,
        errors:[]
    }

}