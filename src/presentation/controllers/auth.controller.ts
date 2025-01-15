import {Request,Response} from 'express';
import { LoginUseCase } from '../../domain/usecases/auth/LoginUseCase';
import { RegisterUseCase } from '../../domain/usecases/auth/RegisterUseCase';

export class AuthController{



    constructor(private readonly loginUc:LoginUseCase,private readonly registerUc:RegisterUseCase){

    }


    registrationUser = async(req:Request,res:Response)=>{
       try{
            const user = await this.registerUc.execute(req.body)
            res.status(200).json(user);
       }catch(error){
        console.log(error);
        res.status(400).json({
            "result":"false",
            "data":{},
            "message":error,
        })
       }
    }


    loginUser = async(req:Request,res:Response)=>{
        res.json({
            "message":"login from controller",
        });
    }


    verificationUser = async(req:Request,res:Response)=>{
        res.json({
            "message":"verification from controller",
        });
    }
}