import { LoginDto } from "../dtos/Auth/LoginDto";
import { UserEntity } from "../entities/UserEntity";
import { RegisterDto } from "../dtos/Auth/RegisterDto";


export interface IAuth{

    login(data:LoginDto):Promise<UserEntity>;
    register(data:RegisterDto):Promise<UserEntity>;
    verification(email:string):Promise<UserEntity>;

}