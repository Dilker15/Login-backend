import { AuthRepository } from "../../../infraestructure/repository/AuthRepository";




export class LoginUseCase{


    constructor(private readonly authRepo:AuthRepository){

    }

    async execute(data:{[key:string]:any}){
        
    }
}