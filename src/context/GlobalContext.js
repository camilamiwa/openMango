import React, { createContext, useState } from 'react'
export const GlobalContext = createContext()
const GlobalContextProvider = (props) => {
    const [ tokenJWT, setTokenJWT ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ id_login, setIdLogin ] = useState('')
    return (
         <GlobalContext.Provider 
            value={{
                tokenJWT, setTokenJWT,
                cpf, setCpf,
                id_login, setIdLogin
             }}>
               {props.children}
         </GlobalContext.Provider>
    )
}
export default GlobalContextProvider