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
    names:'',
    lastnames:'',
    address:'calle falsa',
    imgProfile:'',
    dniFront:"",
    dniBack:"",
    phone:'',
    email:'',
    DNI: "12345678",
    password:'',
    birthdate:'',
    // terminos:false,
}

const usuarioReducer = ( state = usuarioState, payload) => {
    switch (payload.type) {
        case 'names':
            return {
                ...state,
                address:'calle false',
                DNI:'12345678',
                imgProfile:'',
                names: payload.data
            }
        case 'lastnames':
            return {
                ...state,
                lastnames: payload.data
            }
       case 'address':
           return {
               ...state,
               address: payload.data
        }  
        case 'phone':
           return {
               ...state,
               phone: payload.data
        }  
        // case 'codVer':
        //      return {
        //          ...state,
        //          codVer: payload.data
        //   }  
          case 'imgProfile':
            return {
                ...state,
                imgProfile: payload.data,
                dniFront: payload.data,
                dniBack: payload.data,

         }  
          case 'email':
             return {
                 ...state,
                 email: payload.data
          }  
          case 'password':
             return {
                 ...state,
                 password: payload.data
          }      
          case 'birthdate':
            return {
                ...state,
                birthdate: payload.data
         }  
        //   case 'terminos':
        //      return {
        //          ...state,
        //          terminos: payload.data
        //   }      
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

