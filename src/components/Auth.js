import React from "react";
import { useDispatch } from "react-redux";
import "./Auth.css"; 
import { authActions } from "./store/auth-slice";


const Auth = () => {
  const dispatch = useDispatch();

  const handle=(e)=> {
    e.preventDefault();
    dispatch(authActions.login()) 

  }

  return (
    <div className="container">
      
      <form  onSubmit={handle}>
         <h2>Login</h2>        
        <input type="text" name="id" id="id" required autoComplete="off" placeholder="Name"/>
        <input type="password" name="password" id="password" required autoComplete="off"
        placeholder="Password"/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
