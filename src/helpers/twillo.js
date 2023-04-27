// import { Twilio } from 'twilio-client';
// import {twilio} from 'twilio-client';
import axios from "axios";
import {TWILIO_ACCOUNT_ID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER} from '@env';
import { btoa } from 'base-64';

// export const sendSms = () =>{
//     const verificationCode = Math.floor(100000 + Math.random() * 900000);
//     const twilioClient = new Twilio(
//                  process.env.TWILIO_ACCOUNT_ID,
//                  process.env.TWILIO_AUTH_TOKEN,
//           );
        
//           twilioClient.messages.create({
//                    body: `Tu código de autenticación es: ${verificationCode}`,
//                   from:  '+541141668947',
//                  to: process.env.TWILIO_NUMBER,
//                 }).then(() => {
//                    callback(null, `Código de autenticación enviado a ${phoneNumber}`);
//                 }).catch((error) => {
//                    callback(error);
//                  });
//               };



//   curl 'https://api.twilio.com/2010-04-01/Accounts/ACd6fed300e0e5c78ab9dcc6fc33fb2f87/Messages.json' -X POST \
//   --data-urlencode 'To=+541141668947' \
//   --data-urlencode 'From=+16813346938' \
//   --data-urlencode 'Body=Hola Derek' \
//   -u ACd6fed300e0e5c78ab9dcc6fc33fb2f87:[AuthToken]
  
  
  // Crea una instancia de axios 

export const sendMessage = async (clientPhone) => {

    const verificationCode = Math.floor(100000 + Math.random() * 900000);
console.log()
  try {
    const response = await axios.post(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_ID}/Messages.json`, 
    {
        headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic' + btoa(`${TWILIO_ACCOUNT_ID}:${TWILIO_AUTH_TOKEN}`),
        }
      },
    {
       data: { 
        To: `+54${clientPhone}`,
        From: TWILIO_NUMBER,
        Body: verificationCode
       }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error, ' error en la patecion de TWILIO');
  }
}
