


const  validEmailRegex =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;


export async function isEmail(email:string):Promise<boolean>{
    
    return validEmailRegex.test(email.trim())
}