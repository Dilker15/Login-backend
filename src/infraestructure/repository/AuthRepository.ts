import { PrismaClient } from "@prisma/client";
import { LoginDto } from "../../domain/dtos/Auth/LoginDto";
import { RegisterDto } from "../../domain/dtos/Auth/RegisterDto";
import { UserEntity } from "../../domain/entities/UserEntity";
import { IAuth } from "../../domain/interfaces/IAuth";


export class AuthRepository implements IAuth{

    constructor(private readonly prisma:PrismaClient){

    }

    async login(data: LoginDto): Promise<UserEntity> {
       const user =await this.prisma.users.findFirst({
            where:{
                email:data.email,
                email_verified:true,
                
            }
       });
       if(!user){
         throw new Error('User Does not exist');
       }
       return UserEntity.userEntityFromObject(user);
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



    async verification(email: string): Promise<UserEntity> {
        const user = await this.prisma.users.findFirst({
            where:{email}
        });

        if(!user){
            throw new Error('User not Found to Verify');
        }
        const userFound = await this.prisma.users.update({
            where:{
                email
            },
            data:{
                email_verified:true,
            }
        });
        return UserEntity.userEntityFromObject(userFound);
    }


}