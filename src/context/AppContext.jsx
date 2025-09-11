import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

const AppContextProvider = (props) => { // Fixed: Renamed to avoid conflict
    const [user, setUser] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const BACKEND_API_URL =  'http://localhost:3000/'

    const value = {
        user,
        setUser,
        setShowLogin,
        showLogin,
        navigate,
        BACKEND_API_URL
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;