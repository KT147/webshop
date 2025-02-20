import { createContext, useState } from "react";

// selle kaudu saan teda importides globaalseid muutujaid kätte. 
export const AuthContext = createContext();

// provider määrab globaalsust mis tasemel need muutujad kättesaadavad on
export const AuthContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("token") === "token123");

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}