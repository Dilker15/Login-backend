import Prisma from '../../domain/config/Prisma';



export class PostgresConnection{


    static async startConnection():Promise<void>{
        await Prisma.$connect();
        console.log("Postgres Connection was Succesfull");
    }

}