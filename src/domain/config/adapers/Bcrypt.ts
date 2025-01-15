import bcrypt from 'bcrypt'



export class Bcrypt{


    static hasPassword(password:string):string{
        const hash = bcrypt.hashSync(password,10);
        return hash;
    }


    static async comparePassword(userPassword:string,hashedPassword:string):Promise<boolean>{
        const match = await bcrypt.compare(userPassword,hashedPassword);
        return match;
    }

    

}