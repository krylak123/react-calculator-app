import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [result, setResult] = useState('');
    const [isOperend, setIsOperend] = useState(false)

    return (
        <AppContext.Provider value={{
            result,
            setResult,
            isOperend,
            setIsOperend
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;