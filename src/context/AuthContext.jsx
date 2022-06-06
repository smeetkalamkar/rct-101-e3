import React, { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false);
     const navigate = useNavigate()
     const {state} = useLocation()

  const login = ()=>{
    setIsAuth(true)
    if(state.from){
      navigate(state.from)
  }
  else{
      navigate("/")
  }
  }

  const logout = ()=>{
    setIsAuth(false)
  }
  return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
