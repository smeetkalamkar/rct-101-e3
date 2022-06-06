import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
 
  const {login} = useContext(AuthContext);
  const [loginCreds,setLoginCreds] = useState({});


const handleOnChange = (e)=>{
  const {name,value} = e.target;

  setLoginCreds({
    ...loginCreds,
    [name]:value
  })
}

const handleSubmit = (e)=>{
  
  e.preventDefault();
  if(loginCreds.email && loginCreds.password){
    login()
  }
 
}


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
    <div>
      <div>
      <input data-cy="login-email" placeholder="Enter email" name="email" onChange={handleOnChange} />
      </div>
      <div>
      <input data-cy="login-password" type="password" placeholder="Enter password" name="password"  onChange={handleOnChange} />
      </div>
      <div>
      <button data-cy="login-submit" type="submit" >Submit</button>
      </div>
    </div>
    </form>
  );
};

export default Login;
