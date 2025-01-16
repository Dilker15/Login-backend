import { AuthRepository } from "../../../infraestructure/repository/AuthRepository";
import { Bcrypt } from "../../config/adapers/Bcrypt";
import { Jwtoken } from "../../config/adapers/Jwtoken";

import { UserEntity } from "../../entities/UserEntity";





export class VerificationUseCase{


    constructor(private readonly authRepo:AuthRepository){

    }

    async execute(token:string):Promise<UserEntity>{
        
        const payload  = await Jwtoken.verifyToken(token);
        if(!payload){
            throw new Error('Token is Wrong');
        }
        const {user}=payload;
        const userFound = await this.authRepo.verification(user);
        return userFound;
    }
}