import { LoggedInUser, NewUser, User } from "@/types/users";
import connection  from "@/DB/dbConnection"
import { CustomError } from "@/lib/CustomError";
import { ObjectId } from "mongodb";


export async function getUserById(id:string | ObjectId):Promise<LoggedInUser | undefined>{

    if(!id || typeof id !== "string"  || !ObjectId.isValid(id)){
        return  ;
    }
try {
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


// FIND A USER BY EMAIL 


export async function getUserByEmail(emailString:string):Promise<User | undefined>{

    if(!emailString|| typeof emailString !== "string" ){
        return  ;
    }
try {
    const client = await connection

    if(!client){
        throw new CustomError("Network error, could not connect to the database",500)
    }
    
    const user  = await client
    .db("startUp")
    .collection("users").findOne({email:emailString})

    if(!user) throw new CustomError("No such user in the database",404)
    
    const {_id,email,listings,fullName,password}= user

    return {
        id:_id.toString(),
        email,
        listings,
        fullName,
        password
    }
} catch (error) {
    throw error
}
}

// INSERT A NEW USER



export async function createUser(user:NewUser):Promise<LoggedInUser | undefined>{

       if(!user) return 
    try {
        const client = await connection
        if(!client)    throw new CustomError("Network error, could not connect to the database",500)
 
        const result = await client
        .db("startUp")
        .collection("users")
        .insertOne(user);
    } catch (error) {
        throw error
    }

}