


export class RegisterDto{


    public name:string;
    public email:string;
    public password:string;
    public dni:string;

    constructor(name:string,email:string,password:string,dni:string){
        this.name=name;
        this.email=email;
        this.password=password;
        this.dni=dni;
    }


    static generate(body:{[key:string]:any}):RegisterDto{
        return new RegisterDto(body.name,body.email,body.password,body.dni);
    }
    


}