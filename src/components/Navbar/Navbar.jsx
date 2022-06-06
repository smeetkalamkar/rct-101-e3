import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/Login";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,login,logout} = useContext(AuthContext)

  const onLoginClick = ()=>{
    if(isAuth){
      logout()
    }
    else{
      login()
    }
  }

  
  return (
    <div data-cy="navbar" className="navbar">
      <Link data-cy="navbar-home-link" to="/" >Home</Link>
      <span data-cy="navbar-cart-items-count">Cart : {/* count here */ }</span>
      <button data-cy="navbar-login-logout-button" onClick={onLoginClick}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
