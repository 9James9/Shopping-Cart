import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Item from './Item/item'
import './shop.css'
const Shop = ({updateCart, removeFromCart,cart}) => {
  const [names, setNames] = useState([])
    const navigate = useNavigate()
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
    useEffect(() => {
      // console.log(cart)
      filterData(cart)
    },[cart])
  return (
    <div className='shop__container'>
                  <h1 className="shop__title" onClick={() => navigate("/cart")}>Zamazonia - Free shipping for Prime members</h1>
        <div className='shop__itemContainer'>
            <Item id="0"name="Shoes" updateShop={updateCart}/>
            <Item id="1"name="Socks" updateShop={updateCart}/>
            <Item id="2"name="Coal" updateShop={updateCart}/>

        </div>
        <div className='shop__cartDisplay'>
          <h4>Cart</h4>
        {names.map((item,index) => {
              return <p key={index}>{item}</p>
            })}
            <button>Checkout now</button>
          </div>
    </div>
  )
}

export default Shop