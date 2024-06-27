import { createContext, useContext, useState } from "react";

export const Mycontext=createContext()

export const Myprovider=({children})=>{
   
    
    const intialAuthuser=localStorage.getItem("datauser")
    console.log(intialAuthuser)
    const [authuser,setauthuser]=useState(
        intialAuthuser )

    return(
        <Mycontext.Provider value={[authuser,setauthuser]}>
            {children}
        </Mycontext.Provider>
    )
}

export const useAuth=()=>useContext(Mycontext)