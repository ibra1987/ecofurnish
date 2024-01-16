

export class CustomError extends Error{
       code:number;
    constructor(message:string, code:number){
        super()
        this.code =code
        this.message= message
    }

}

 