import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from './Item/item'
const Shop = ({updateCart, removeFromCart,cart}) => {
  const [names, setNames] = useState([])
    const navigate = useNavigate()
    const filterData = (e) => {
      let newNames = [];
      // let newIds = [];
      for (let i = 0; i < cart.length; i++) {
        newNames.push(cart[i].name);
      }
      console.log(newNames)
      // for (let i = 0; i < cart.length; i++) {
      //   newIds.push(cart[i][1]);
      // }
  
      setNames(newNames);
      // setIds(newIds);
    };
    useEffect(() => {
      filterData(cart)
    },[cart])
  return (
    <div>
        <div>
            <h1 onClick={() => navigate("/cart")}>Cart</h1>
            <Item id="0"name="Shoes" updateShop={updateCart}/>
            <Item id="1"name="Socks" updateShop={updateCart}/>
            <Item id="2"name="Coal" updateShop={updateCart}/>
            {names.map((item,index) => {
              return <p>{item}</p>
            })}
        </div>
    </div>
  )
}

export default Shop