import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({cart}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 onClick={() => navigate("/shop")}>Shop</h1>
        <h1>Cart PAGE!</h1>
        <p>{cart}</p>
      </div>
    </div>
  );
};

export default Cart;
