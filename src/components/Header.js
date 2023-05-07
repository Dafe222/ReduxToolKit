import React from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "./store/auth-slice";


const Header = () => {
const dispatch = useDispatch(); 

const logOutHandler = ()=> {
  dispatch(authActions.logout())
}


  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
            <li>
              <h2
                className="header-h2"
                style={{ fontFamily: "monospace", fontSize: "20px" }}
              >
                <h2>Ed Market</h2>
              </h2>
            </li>
            <li>  
               <Cart /> 
            </li> 
            <li>
                <button id="out" onClick={logOutHandler}>Log Out</button>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
