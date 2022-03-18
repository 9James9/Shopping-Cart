import React from 'react'
import './cartitem.css'
const CartItem = ({itemName, index, removeFromCart}) => {
  return (
    <div>
        <div className='cartItem__container'>
            <p>{itemName}</p>
            <p>{index}</p>
            <button value={index} onClick={removeFromCart}>Remove</button>
            <button className='quantity__button'>Increase Quantity</button>
        </div>
    </div>
  )
}

export default CartItem