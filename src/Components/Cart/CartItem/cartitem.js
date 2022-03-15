import React from 'react'

const CartItem = ({itemName, index}) => {
  return (
    <div>
        <div>
            <p>{itemName}</p>
            <p>{index}</p>
            <button>Remove</button>
        </div>
    </div>
  )
}

export default CartItem