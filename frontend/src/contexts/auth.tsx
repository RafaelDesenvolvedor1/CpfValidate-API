import React, { createContext } from "react";

import api from "../services/api"

type Props = {
    children: React.ReactNode;
}

type AuthContextType = {
    getCpfValid: (num: number) => Promise<boolean | undefined>;
}

interface CpfResponse  {
    valid: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({children}:Props){


    async function getCpfValid(num:number): Promise<boolean | undefined> {
        try{
            const response = await api.get<CpfResponse>(`/${num}`, {});
            return response.data.valid
        }catch(err){
            alert("erro")
            console.log(err)
        }
    }


    return(
        <AuthContext.Provider
            value={{                
               
                getCpfValid
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}