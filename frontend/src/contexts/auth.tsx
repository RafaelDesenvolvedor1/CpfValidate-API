import React, { createContext } from "react";

export const AuthContext = createContext({});

type Props = {
    children: React.ReactNode;
}

export function AuthProvider({children}:Props){

    return(
        <AuthContext.Provider
            value={{
                
            }}
        >

        </AuthContext.Provider>
    )

}