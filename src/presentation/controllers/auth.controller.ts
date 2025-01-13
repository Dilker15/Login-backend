import {Request,Response} from 'express';

export class AuthController{



    constructor(){

    }


    registrationUser = async(req:Request,res:Response)=>{
        res.json({
            "message":"register from controller",
        });
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