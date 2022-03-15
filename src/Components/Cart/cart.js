import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem/cartitem";
const Cart = ({ cart }) => {
    const [names, setNames] = useState([])
    const [ids, setIds] = useState([])
  const navigate = useNavigate();
useEffect(() => {
    filterData(cart)
},[cart])
const filterData = e => {
console.log('filtering data')
let newNames = []
let newIds = []
    for (let i = 0; i < cart.length; i ++) {
        newNames.push(cart[i][0])
    }
    for (let i = 0; i < cart.length; i ++) {
        newIds.push(cart[i][1])
    }

    setNames(newNames)
    setIds(newIds)
}
  return (
    <div>
      <div>
        <h1 onClick={() => navigate("/shop")}>Shop</h1>
        <h1>Cart PAGE!</h1>
        <ul>
        {names.map((item, index) => {
            console.log(item)
          return <li key={index}>{item}</li>;
        })}
      </ul>
        <p></p>
      </div>
    </div>
  );
};

export default Cart;
