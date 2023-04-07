import axios from 'axios';
// const urlServer = import la url el .env;

const urlServer = 'http://localhost:3000/auth/'

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
console.log(data, 'df')
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
    try {
        const resp = await axios.post('http://localhost:3000/auth/signupUsers',date)
             console.log(resp);
    } catch (error) {
         console.log(`${urlServer}signupUsers`,date)
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
    let date = {
        email:'dsd@da.com',
        password:'12345678+Derek'
    }
    try {
        const resp = await axios.post('http://localhost:3000/auth/loginUsers',JSON.stringify(date))
             console.log(resp);
    } catch (error) {
         console.log('http://localhost:3000/auth/loginUsers',JSON.stringify(date))
    }

}

export {
    registerUser,
    login
}