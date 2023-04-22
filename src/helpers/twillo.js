import { Twilio } from 'twilio-client';
import twilio from 'twilio-client';

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



export const sendSMS = async (message, clientPhone) => {
    try {
      // Inicializamos el cliente de Twilio con nuestro Account SID y Auth Token
      const client = twilio(
        process.env.TWILIO_ACCOUNT_ID,
        process.env.TWILIO_AUTH_TOKEN,
      );

      // Enviamos el mensaje de texto utilizando la API de Twilio
      const response = await client.messages.create({
        body: message,
        from: process.env.TWILIO_NUMBER, // número de Twilio
        to :  clientPhone,
      });

      // Mostramos una alerta con el ID del mensaje enviado
      Alert.alert('Mensaje enviado', `ID del mensaje: ${response.sid}`);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Hubo un error al enviar el mensaje');
    }
  };
