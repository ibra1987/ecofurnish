import { LoggedInUser } from "@/types/users";
import connection  from "@/DB/dbConnection"
import { CustomError } from "@/lib/CustomError";
import { ObjectId } from "mongodb";


export async function getUserById(id:string | ObjectId):Promise<LoggedInUser | undefined>{

    if(!id || typeof id !== "string"  || !ObjectId.isValid(id)){
        return  ;
    }
try {
  console.log(id)
    const client = await connection

    if(!client){
        throw new CustomError("Network error, could not connect to the database",500)
    }
    id =  typeof id  === 'string' ?  new ObjectId(id) : id
    const user  = await client
    .db("startUp")
    .collection("users").findOne({_id:id})

    if(!user) throw new CustomError("No such user in the database",404)
    
    const {_id,email,listings,fullName}= user

    return {
        id:_id.toString(),
        email,
        listings,
        fullName
    }
} catch (error) {
    throw error
}
}