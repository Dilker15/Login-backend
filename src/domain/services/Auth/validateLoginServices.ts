



export class validateLoginServices{
    

    static validate(body:{[key:string]:any}):void{
        if(!body.email){
            throw new Error('Email is missing');
        }
        if(!body.password){
            throw new Error('Password is missing');
        }
    }
}