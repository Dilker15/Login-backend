import { AuthRepository } from "../../../infraestructure/repository/AuthRepository";
import { Bcrypt } from "../../config/adapers/Bcrypt";
import { Jwtoken } from "../../config/adapers/Jwtoken";
import { LoginDto } from "../../dtos/Auth/LoginDto";
import { UserEntity } from "../../entities/UserEntity";
import { validateLoginServices } from "../../services/Auth/validateLoginServices";




export class LoginUseCase{


    constructor(private readonly authRepo:AuthRepository){

    }

    async execute(data:{[key:string]:any}){
        validateLoginServices.validate(data);
        const dto = LoginDto.generate(data);
        const userFind:UserEntity = await this.authRepo.login(dto);
        const match = await Bcrypt.comparePassword(dto.password,userFind.password);
        if(!match){
            throw new Error('Password incorrecto');
        }
        const token = Jwtoken.generateToken(userFind.id);
        const {id,name,email,email_verified} = userFind;
        return {id,name,email,email_verified,token};
    }



}