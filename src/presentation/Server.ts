import express,{Application, urlencoded} from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { AppRoutes } from './AppRoutes';
dotenv.config();


export class Server{

    private readonly port:number;
    private readonly app:Application;

    constructor(){
        const nu:string = process.env.PORT||'5000';
        if(!nu){
            throw new Error('Port not Found');
        }
        this.port = parseInt(nu);
        this.app = express();
        this.startMiddlewares();
        this.startRoutes();
        this.startConnections();
    }


    private startMiddlewares():void{
        this.app.use(express.json());
        this.app.use(urlencoded({extended:true}));
    }

    private startRoutes():void{
        this.app.use(AppRoutes.startRoutes());
    }


    private startServer():void{
        this.app.listen(this.port,()=>{
            console.log(`Server Running on Port : ${this.port}`);
        })
    }

    private startConnections():void{
        try{
            this.startServer();
        }catch(error){

        }
    }

}