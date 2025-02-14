import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {isAuth} = useContext(AuthContext)
  const location = useLocation();
  
  if(isAuth){
    return children;
  }
  else{
    return <Navigate to="/login" state={{from:location.pathname}}/>
  }
 
};

export default RequiredAuth;
