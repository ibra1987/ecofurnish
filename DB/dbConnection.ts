import { MongoClient,ServerApiVersion } from "mongodb";


const mongodbUri = process.env.MONGODB_URI || ""

const client = new MongoClient(mongodbUri,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
})
const connection =async ()=>{

    try{
      
        const dbConnection = await client.connect()
        return dbConnection
       

    }catch(error:any){

       console.log("could not create a connect to the databse :"+ error.message)
    }
}

const dbConnection =  connection()

export default dbConnection