import React, { createContext, useReducer } from "react"

// * DATOS A ENVIAR--
// * "names": "",
//  "lastnames": "",
//  "email": "",
//  "password": "",
//  "phone": "",
//  "address": "",
//  "birthdate": "",
//  "DNI": "",
//  "imgProfile": "",
//  "DniFront": "",
//  "DniBack": ""


export const usuarioState = {
    nombre:'',
    apellido:'',
    img:'',
    dniFront:"",
    dniBack:"",
    numCel:'',
    codVer:'',
    email:'',
    clave:'',
    fechaDeNacimiento:'',
    terminos:false,
}

const usuarioReducer = ( state = usuarioState, payload) => {
    switch (payload.type) {
        case 'name':
            return {
                ...state,
                nombre: payload.data
            }
        case 'apellido':
            return {
                ...state,
                apellido: payload.data
            }
       case 'numCel':
           return {
               ...state,
               numCel: payload.data
        }  
        case 'codVer':
             return {
                 ...state,
                 codVer: payload.data
          }  
          case 'img':
            return {
                ...state,
                img: payload.data,
                dniFront: payload.data,
                dniBack: payload.data,

         }  
          case 'email':
             return {
                 ...state,
                 email: payload.data
          }  
          case 'clave':
             return {
                 ...state,
                 clave: payload.data
          }      
          case 'fechaDeNacimiento':
            return {
                ...state,
                fechaDeNacimiento: payload.data
         }  
          case 'terminos':
             return {
                 ...state,
                 terminos: payload.data
          }      
        default:
            break;
    }
}

export const UsuarioContext = createContext(usuarioState)

export const UsuarioProvider = (props) =>{
    
    const [login, loginAction] = useReducer(usuarioReducer,  usuarioState)

    return (
        <UsuarioContext.Provider value={[login, loginAction]}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

