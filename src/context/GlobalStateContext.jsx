import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalStateContext = ({ children }) => {

    const [fileContent, setFileContent] = useState(null)
    const [resultado, setResultado] = useState({
        tipos: [],
        fe: 0,
        fo: 0,
        x2: 0
    })

    return (
        <GlobalContext.Provider
        value={{
            fileContent, setFileContent,
            resultado, setResultado
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext