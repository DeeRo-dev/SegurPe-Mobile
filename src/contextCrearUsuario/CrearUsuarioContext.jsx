import React, { createContext, useReducer } from "react"


export const usuarioState = {
    nombre:'Derek',
    apellido:'cabrera',
    img:'',
    numCel:'456654',
    codVer:'',
    email:'',
    clave:'',
    terminos:false,
}

const usuarioReducer = ( state = usuarioState, payload) => {
    switch (payload.type) {
        case 'name':
            console.log('name entro')
            return state
    
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

