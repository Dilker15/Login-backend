


export class UserEntity{


    public id:string;
    public name:string;
    public email:string;
    public password:string;
    public dni:string;
    public email_verified:boolean;
    public created_on:Date;
    public updated_on:Date;


    constructor(id:string,name:string,email:string,password:string,dni:string,email_verified:boolean,created_on:Date,updated_on:Date){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.dni=dni;
        this.email_verified=email_verified;
        this.created_on=created_on;
        this.updated_on=updated_on;
    }



    static userEntityFromObject(data:{[key:string]:any}):UserEntity{
        return new UserEntity(data.id,data.name,data.email,data.password,data.dni,data.email_verified,data.created_on,data.updated_on);
    }

    
}