import jwt, { JwtPayload } from 'jsonwebtoken'


export class Jwtoken{


    static  generateToken(id:string):string{
        const seed = process.env.TOKEN_SEED;
        if(!seed){
            throw new Error('Seed token not found');
        }
        const token = jwt.sign({user:id},seed,{expiresIn:'1h'});
        return token;
    }


    static async verifyToken(token:string):Promise<JwtPayload|null>{
        const seed = process.env.TOKEN_SEED;
        if(!seed){
            throw new Error('Seed token not found');
        }
         const payload = jwt.verify(token,seed) as JwtPayload;
         return payload;
    }
    

}