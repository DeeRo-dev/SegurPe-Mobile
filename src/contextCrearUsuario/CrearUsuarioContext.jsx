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
    DniFront:"",
    DniBack:"",
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

// Otro context para controlar datos extras

export const dataUserExtraState = {
    codVer:'',
    img:'',
    terminos:false,
}



const dataExtraReducer = ( state = dataUserExtra, payload) => {
    switch (payload.type) {
        
        case 'codVer':
             return {
                 ...state,
                 codVer: payload.data
          }  
          case 'img':
            console.log(payload.data)
            return {
                ...state,
                img: payload.data,
                

         }  
          case 'terminos':
            console.log(payload.data)
             return {
                 ...state,
                 terminos: payload.data
          }      
        default:
            break;
    }
}


export const DataExtraContext = createContext(dataUserExtraState)

export const DataExtraProvider = (props) =>{
    
    const [data, dataAction] = useReducer(dataExtraReducer,  dataUserExtraState)

    return (
        <DataExtraContext.Provider value={[data, dataAction]}>
            {props.children}
        </DataExtraContext.Provider>
    )
}