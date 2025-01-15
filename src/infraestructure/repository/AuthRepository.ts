import { PrismaClient } from "@prisma/client";
import { LoginDto } from "../../domain/dtos/Auth/LoginDto";
import { RegisterDto } from "../../domain/dtos/Auth/RegisterDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { IAuth } from "../../domain/interfaces/IAuth";


export class AuthRepository implements IAuth{

    constructor(private readonly prisma:PrismaClient){

    }

    login(data: LoginDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }


    
    async register(data: RegisterDto): Promise<UserEntity> {
        const user = await this.prisma.users.create({
            data:{
                name:data.name,
                email:data.email,
                password:data.password,
                dni:data.dni,
            }
        });
        return UserEntity.userEntityFromObject(user);
    }



    verification(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}