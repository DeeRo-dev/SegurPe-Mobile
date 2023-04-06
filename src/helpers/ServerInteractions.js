import axios from 'axios';
// const urlServer = import la url el .env;

const urlServer = 'http://localhost:3000/api/v1/'

// axios({
//     method: 'get',
//     //  url: `${baseUrl}/api/users/1`,
//   }).then((response) => {
//     console.log(response.data);
//   });
  

/*
// Enviar los datos para Registrarse//
*Descripcion: Interactua con las ruta signupUsers.POST -
 * Entradas:
 * data: objeto con las propiedades para la llamada
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

/*
// Enviar los datos para Login//
*Descripcion: Interactua con las ruta loginUser .POST -
 * Entradas:
 * data: objeto con las propiedades para la llamada
 * Retorna: Respuesta del servidor
 */
const login = async(data)=> {
    try {
        const resp = await axios.post(`${urlServer}loginUsers`)
             console.log(resp);
    } catch (error) {
         console.log(error)
    }

}

export {
    registerUser,
    login
}