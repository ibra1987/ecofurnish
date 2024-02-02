"use server"

export async function AddListingAction(formdata:FormData){
    console.log(formdata?.get('category'))
}