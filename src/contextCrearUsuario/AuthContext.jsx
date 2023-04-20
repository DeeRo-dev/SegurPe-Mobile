import React,{ createContext, useReducer } from "react";


export const AuthState = {
    errorMessage:'',
    status:'',
    token: null,
};
 

const AuthReducer = ( state = AuthState, payload) => {
    switch (payload.type) {
        // case 'errorMessage':
        //     return {
        //         ...state,
        //         errorMessage: payload.data
        //     }
        case 'addError':
            return {
                ...state,
                status: 'not-authenticated',
                errorMessage: payload.data
            }
            case 'singUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: payload.data
            }
            case 'removeError':
                return {
                    ...state,
                    errorMessage: ''
                }
            case 'loading':
            return {
                ...state,
                status:'checking',
                token: null
            }
            case 'not-authenticated':
                return {
                    ...state,
                    status:'not-authenticated',
                    token: null
                }
        default:
            break;
    }
}


const AuthContext = createContext(AuthState);

export const AuthProvider = ({children})=>{
    const [data, dataAction] = useReducer(AuthReducer, AuthState)
    return (
        <AuthContext.Provider value={[data, dataAction]}> 
            {children}
        </AuthContext.Provider>
    )
}