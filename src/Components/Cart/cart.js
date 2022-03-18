import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/cartitem";
import './cart.css'
const Cart = ({ cart, removeFromCart, increaseQuantity }) => {
  const [names, setNames] = useState([]);
//   const [ids, setIds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    filterData(cart);
  }, [cart]);
  const filterData = (e) => {
    let newNames = [];
    // let newIds = [];
    for (let i = 0; i < cart.length; i++) {
      newNames.push(cart[i].name);
    }
    // for (let i = 0; i < cart.length; i++) {
    //   newIds.push(cart[i][1]);
    // }

    setNames(newNames);
    // setIds(newIds);
  };
  return (
    <div>
      <div>
        <h2 className="cart__title">Cart</h2>
        <button className="checkout__button">Checkout Now</button>
        <ul>
          {names.map((item, index) => {
            return <CartItem increaseQuantity={increaseQuantity} key={index} index={index} itemName={item} removeFromCart={removeFromCart}/>;
          })}
        </ul>
        <button className="checkout__button">Checkout Now</button>
      </div>
    </div>
  );
};

export default Cart;
