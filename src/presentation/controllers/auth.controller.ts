import {Request,Response} from 'express';
import { LoginUseCase } from '../../domain/usecases/auth/LoginUseCase';
import { RegisterUseCase } from '../../domain/usecases/auth/RegisterUseCase';
import { VerificationUseCase } from '../../domain/usecases/auth/VerificationUseCase';

export class AuthController{



    constructor(private readonly loginUc:LoginUseCase,private readonly registerUc:RegisterUseCase,private readonly verifyUc:VerificationUseCase){

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
        try{
            const user = await this.loginUc.execute(req.body);
            res.json({
                "result":true,
                "user":user,
                "message":"ok"
            });
        }catch(error){
            console.log(error);
            res.status(400).json({
                "result":false,
                error,
                "data":{},
                "message":error
            })
        }
        
    }


    verificationUser = async(req:Request,res:Response)=>{
        const token = req.params.token;
        try{
            const user = await this.verifyUc.execute(token);
            res.status(200).json({
                "result":true,
                "message":"User Verified",
                "data":user,
            })
        }catch(error){
            console.log(error);         // YOU CAN USE WINDSON TO LOG ERRORS INSTEAD OF THIS
            res.status(400).json({
                "result":false,
                "data":{},
                 "message":error,
            })
        }
       
    }
}