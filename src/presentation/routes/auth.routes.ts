import { Router,Request,Response } from "express";
import { AuthController } from "../controllers/auth.controller";



export class AuthRoutes{


    static startRoutes():Router{
        const router = Router();
        const authController = new AuthController();
        
        router.post('/register',authController.registrationUser);
        router.post('/login',authController.loginUser);
        router.get('/user-verification/:token',authController.verificationUser);

        return router;

    }
}