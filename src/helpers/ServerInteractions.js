import axios from 'axios';
// const urlServer = import la url el .env;

const urlServer = 'http://localhost:3000/auth/'


/*
// Enviar los datos para Registrarse//
*Descripcion: Interactua con las ruta signupUsers.POST -Sssss
 * Entradas:SssssssssSss
 * data: objeto con las propiedades para la llamada
 * Retorna: Respuesta del servidor
 */
const registerUser = async(data )=> {
// console.log(data, 'df')
let date = 
{
     names: "DEred",
     lastnames: "cabrera",
     email: "deraes@adasgfd.com",
     passwor: "31454542+Derek",
     phone: "32324",
     address: "dased23",
     birthdate: "1997-01-25",
     DNI: "43434367",
     imgProfile: "",
     DniFront: "",
     DniBack: ""
   };
   const route = 'singupUsers'
   const response = await conexionServidor(route, "post", date)

   if (response) {
    const responseHanded = await ServerResponseHandler(response, output);
    console.log(responseHanded)
	return responseHanded;
   }
   console.log(response)
}





const conexionServidor = async (url, method, body) => {
    let header;
    let httpOpc;
         try {
            header = {
                Accept: "*/*",
				"Access-Control-Allow-Origin": urlServer,
                "Content-Type": "application/json",
            }
            httpOpc = { 
              
                headers: header,
                body:body,
            }
            console.log(urlServer+url, httpOpc)
            return response = await axios.post(urlServer+url, httpOpc);
         } catch (error) {
            console.log(error, 'entro en el error de la conx')
         }
}




/*
// Enviar los datos para Login//
*Descripcion: Interactua con las ruta loginUser .POST -
 * Entradas:
 * data: objeto con las propiedades para la llamada
 * Retorna: Respuesta del servidor
 */
const login = async(data)=> {
    let date =       {
        email:"deraes@GFGadasd.com",
        password:"31454542+Derek"
        }
    try {
      const response = await axios.post(urlServer, {
        email: 'deraes@GFGadasd.com',
        password: '31454542+Derek'
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

}
/**Descripcion: transforma la respuesta del servidor en un formato legible. -
 *Entradas:
 *response: respuesta del servidor,
 *type: tipo de formato 'text' o 'json' -
 *Retorna: Respuesta del servidor en formato legible
 */
 const ServerResponseHandler = async (response, type) => {
	if (type === "text") return await response.text();
	if (type === "json") return await response.json();
};
export {
    registerUser,
    login
}