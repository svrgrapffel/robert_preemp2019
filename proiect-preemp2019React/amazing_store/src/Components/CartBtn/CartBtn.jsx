import React from "react";
import "./CartBtn.css";

const CartBtn = () => {
  return (
    <button className="myCart">
      <i className="fas fa-cart-plus cart-icon" />
      <div className="myCart-text">MY CART</div>
      <div className="count"> 12 </div>
    </button>
  );
};

export default CartBtn;
