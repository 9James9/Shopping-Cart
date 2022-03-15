import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from './Item/item'
const Shop = ({updateCart}) => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    useEffect(() => {
        updateCart(cart)
        console.log(cart)
    })
    const updateShop = newValue => { 
        setCart([...cart, [newValue.name, newValue.id]])
        // console.log(cart)
    }
  return (
    <div>
        <div>
            <h1 onClick={() => navigate("/cart")}>Cart</h1>
            <Item id="0"name="Shoes" updateShop={updateShop}/>
            <Item id="1"name="Socks" updateShop={updateShop}/>
            <Item id="2"name="Coal" updateShop={updateShop}/>
            <h1>Shopping page: {cart}</h1>
        </div>
    </div>
  )
}

export default Shop