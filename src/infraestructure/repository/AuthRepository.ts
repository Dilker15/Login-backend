import { LoginDto } from "../../domain/dtos/Auth/LoginDto";
import { RegisterDto } from "../../domain/dtos/Auth/RegisterDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { IAuth } from "../../domain/interfaces/IAuth";


export class AuthRepository implements IAuth{



    login(data: LoginDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }


    
    register(data: RegisterDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }



    verification(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}