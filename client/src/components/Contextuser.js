"use client"

import axios from "axios"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

const Appcontext=createContext(null)
const Contextuser=({children})=>{

  const [UserId, setuserId]=useState("");

    
    



    return (
        <>
<Appcontext.Provider value={{
   
UserId,
setuserId
}}>
    {children}
</Appcontext.Provider>
        </>
    )
}

const UseContextuser=()=>{
    return useContext(Appcontext)
}

export  {Contextuser,UseContextuser}