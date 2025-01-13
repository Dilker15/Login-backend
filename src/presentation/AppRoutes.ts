import { Router } from "express";
import { AuthRoutes } from "./routes/auth.routes";



export class AppRoutes{

    static startRoutes():Router{
        const router = Router();
        router.use('/api/auth',AuthRoutes.startRoutes());


        return router;
    }

}