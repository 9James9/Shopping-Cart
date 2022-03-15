import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from './Item/item'
const Shop = ({updateCart}) => {
    const navigate = useNavigate()
    const [cart, setCart] = useState("")
    const handleChange = e => {
        setCart(e.target.value)

    }
    useEffect(() => {
        updateCart(cart)
    })
    const updateShop = e => {
        console.log(e.name)
    }
  return (
    <div>
        <div>
            <h1 onClick={() => navigate("/cart")}>Cart</h1>
            <input onChange={handleChange}></input>
            <Item name="name 33" updateShop={updateShop}/>
            <h1>{cart}</h1>
        </div>
    </div>
  )
}

export default Shop