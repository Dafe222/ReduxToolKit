import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./store/cart-slice"; 


const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const addHandler = () => {
    dispatch( cartActions.addToCart({ id, name, price,}));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>&#8358;{price} </p>
      <p>x{quantity}/-</p>
      <article>Total &#8358;{total}</article>
      <button className="cart-actions" onClick={removeHandler}> - </button>
      <button className="cart-actions" onClick={addHandler}> + </button>
    </div>
  );
};

export default CartItem;
