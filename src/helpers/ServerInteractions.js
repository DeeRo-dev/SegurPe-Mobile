import axios from 'axios';
// const urlServer = import la url el .env;

const urlServer = 'http://localhost:3000/'

// axios({
//     method: 'get',
//     //  url: `${baseUrl}/api/users/1`,
//   }).then((response) => {
//     console.log(response.data);
//   });
  

/*
// Enviar los datos para logearse//
*Descripcion: Interactua con las ruta login. PUT -
 * Entradas:
 * data: objeto con las propiedades para la llamada
 * route: ruta del servidor,
 * output: tipo de salida deseada ('text' o 'json')
 * jwt: JSON Web Token, en caso de ser una llamada de autenticacion omitir este parametro -
 * Retorna: Respuesta del servidor

 */
const registerUser = async(data, routeoutput, jwt = undefined)=> {
    try {
        const resp = await axios.get(`${urlServer}`)
             console.log(resp.data);
    } catch (error) {
         console.log(error)
    }

}

export {
    registerUser,
}