import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/cartitem";
const Cart = ({ cart, removeFromCart }) => {
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
      newNames.push(cart[i][0]);
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
        <h1 onClick={() => navigate("/shop")}>Shop</h1>
        <h1>Cart PAGE!</h1>
        <ul>
          {names.map((item, index) => {
            return <CartItem key={index} index={index} itemName={item} removeFromCart={removeFromCart}/>;
          })}
        </ul>
        <p></p>
      </div>
    </div>
  );
};

export default Cart;
