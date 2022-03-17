import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/cart.js";
import Shop from "./Shop/shop.js";
import React, { useState, useEffect } from "react";
import Header from "./Header/header.js";
import Home from "./Home/home.js";
const Router = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (newValue) => {
console.log(checkForDuplicates(cart))
    let item = [newValue.name, cart.length, newValue.quantity,newValue.id]
    let itemData = {
      name: newValue.name,
      position: cart.length,
      quantity: newValue.quantity,
      id: newValue.id
    }
    // console.log(item)
    setCart([...cart, itemData])
  };
  const removeFromCart = e => {
      let value = parseInt(e.target.value)
      setCart(cart.slice(0,value).concat(cart.slice(value + 1)))
  }
  const checkForDuplicates = e => {
    let duplicates = []
    cart.forEach((item, i) => {

      console.log(e[i].id)
      if (item.id == e[i].id) {
        console.log('duplicate spotted')
        duplicates.push(item.id)
      } else {
        return false
      }
    })
    return duplicates.length == 0 ? false : true
  }
  const adjustQuantity = e => {
    cart.forEach((item, i) => {
      if (item.id == e.id) {
        console.log('duplicate spotted')
        setCart(prevState => ({
          cart: {
            ...prevState.cart,
            [item.position]: {
              quantity: "2"
            }
          }
        }))
      }
      console.log(item)
    })
    console.log(cart)
  }

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop updateCart={updateCart} cart={cart}/>}></Route>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}></Route>
        <Route
          path="/bothlol"
          element={
            <div>
              <Shop removeFromCart={removeFromCart}updateCart={updateCart} cart={cart}/>
              <Cart cart={cart} removeFromCart={removeFromCart}/>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
