import { Router,Request,Response } from "express";
import { AuthController } from "../controllers/auth.controller";
import { AuthRepository } from "../../infraestructure/repository/AuthRepository";
import { PrismaClient } from "@prisma/client";
import { LoginUseCase } from "../../domain/usecases/auth/LoginUseCase";
import { RegisterUseCase } from "../../domain/usecases/auth/RegisterUseCase";
import Prisma  from '../../domain/config/Prisma';
import { Email } from "../../domain/usecases/email/Email";
import { VerificationUseCase } from "../../domain/usecases/auth/VerificationUseCase";



export class AuthRoutes{


    static startRoutes():Router{
        const router = Router();
        const authRepo = new AuthRepository(Prisma);
        const loginUc  = new LoginUseCase(authRepo);
        const EmailService = new Email();
        const registerUc = new RegisterUseCase(authRepo,EmailService);
        const verificationUc = new VerificationUseCase(authRepo);
        const authController = new AuthController(loginUc,registerUc,verificationUc)

        
        
        router.post('/register',authController.registrationUser);
        router.post('/login',authController.loginUser);
        router.get('/user-verification/:token',authController.verificationUser);

        return router;

    }
}