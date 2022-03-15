import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Shop = ({updateCart}) => {
    const navigate = useNavigate()
    const [cart, setCart] = useState("")
    const handleChange = e => {
        setCart(e.target.value)

    }
    useEffect(() => {
        updateCart(cart)
        console.log("updating cart")
    })
  return (
    <div>
        <div>
            <h1 onClick={() => navigate("/cart")}>Cart</h1>
            <input onChange={handleChange}></input>
            <h1>{cart}</h1>
        </div>
    </div>
  )
}

export default Shop