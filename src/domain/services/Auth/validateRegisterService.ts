

export class ValidateRegisterService{


    static validate(body:{[key:string]:any}):void{
        if(!body.name || body.name.length<=2){
            throw new Error('Name is missing or too short');
        }
        if(!body.email || !this.validateEmail(body.email)){
            throw new Error('Email is missing or invalid Email');
        }
        if(!body.password || body.password.length< 8 || !this.validatePassword(body.password)){
            throw new Error('Password must be at least 8 chars and 1 Uppercase');
        }
        if(!body.dni || body.dni.length<5){
            throw new Error('Invalid DNI');
        }
    }


    private static validateEmail(email:string):boolean{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }


    private static validatePassword(password:string):boolean{       // this REGEx verify an uppercase in password. It can be modified for complexity
        const passwordRegex = /^(?=.*[A-Z]).+$/;
        return passwordRegex.test(password);
    }
}