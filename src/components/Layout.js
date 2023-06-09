import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";




const Layout = () => {

  let total = 0; 
  const itemsList = useSelector((state)=> state.cart.itemsList); 

  itemsList.forEach((item) =>{
    total += item.totalPrice
  }); 

// ======================================
  const showCart = useSelector((state)=> state.cart.showCart);
  // time 1:05:18

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
       {showCart &&  <CartItems/>}
        <div className="total-price">
          <h3>Total: &#8358;{total}</h3>
          {/* <button className="orderBtn">
              Place Order
           </button> */}
        </div>{" "}
      </div>
    </React.Fragment>
 
  );
};

export default Layout;
