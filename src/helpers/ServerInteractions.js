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
 
 * Retorna: Respuesta del servidor

 */
const registerUser = async(data)=> {
    try {
        const resp = await axios.post(`${urlServer}signupUsers`)
             console.log(resp);
    } catch (error) {
         console.log(error)
    }

}

export {
    registerUser,
}