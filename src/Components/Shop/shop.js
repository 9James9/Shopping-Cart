import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from './Item/item'
const Shop = ({updateCart, removeFromCart,cart}) => {
    const navigate = useNavigate()

  return (
    <div>
        <div>
            <h1 onClick={() => navigate("/cart")}>Cart</h1>
            <Item id="0"name="Shoes" updateShop={updateCart}/>
            <Item id="1"name="Socks" updateShop={updateCart}/>
            <Item id="2"name="Coal" updateShop={updateCart}/>
            <h1>Shopping page: {cart}</h1>
        </div>
    </div>
  )
}

export default Shop