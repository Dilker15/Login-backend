import { AuthRepository } from "../../../infraestructure/repository/AuthRepository";
import { Bcrypt } from "../../config/adapers/Bcrypt";
import { RegisterDto } from "../../dtos/Auth/RegisterDto";
import { UserEntity } from "../../entities/UserEntity";
import { ValidateRegisterService } from "../../services/Auth/validateRegisterService";
import { Email } from "../email/Email";



export class RegisterUseCase{


    constructor(private readonly authRepo:AuthRepository,private readonly emailServices:Email){

    }

    async execute(data:{[key:string]:any}):Promise<UserEntity>{
        ValidateRegisterService.validate(data);
        const dtoRegister:RegisterDto=RegisterDto.generate(data);  
        dtoRegister.password=Bcrypt.hasPassword(dtoRegister.password);   
        const user = await this.authRepo.register(dtoRegister);
        await this.emailServices.sendEmailVerification(user.email);

        return user;
    }
}