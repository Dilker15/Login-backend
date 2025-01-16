import nodemailer,{Transporter} from 'nodemailer'
import fs from 'fs';

export class Email{

    private transporter:Transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            service:process.env.EMAIL_SERVICE,
                auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASSWORD,  
                },
        })
    }


    async sendEmailVerification(to:string,token:string):Promise<void>{
        const body = fs.readFileSync('./src/presentation/templates/verificationTemplate.html','utf-8');
        const urlToVerify = process.env.SERVER_URL_VERIFY+'/'+token;
        const newBody = body.replace('{{verification_link}}',urlToVerify);
        
        const options = {
        from:process.env.EMAIIL_USER,
        to,                                 
        subject: 'EMAIL VERIFICATION LOGIN-APP',                          
        text:'WELCOME, CLICK ON BUTTON TO VERIFY YOUR ACCOUNT',
        html:newBody
        }

        try{
            await this.transporter.sendMail(options);
            console.log("Email Sent Succesfully");
        }catch(error){
            console.log("Error send Email: ",error);
        }
        

    }


}