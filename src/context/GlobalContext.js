import React, { createContext, useState } from 'react'
export const GlobalContext = createContext()
const GlobalContextProvider = (props) => {
    const [ token, setToken ] = useState('')
    const [ id_login, setIdLogin ] = useState('')
    return (
         <GlobalContext.Provider 
            value={{
                token, setToken,
                id_login, setIdLogin
             }}>
               {props.children}
         </GlobalContext.Provider>
    )
}
export default GlobalContextProvider