import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

    const [result, setResult] = useState(0);

    return (
        <AppContext.Provider value={
            result,
            setResult
        }>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;