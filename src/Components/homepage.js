import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/cart.js";
import Shop from "./Shop/shop.js";
import React, { useState, useEffect } from "react";
const HomePage = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (newValue) => {
    checkForDuplicates(newValue)
    let item = [newValue.name, cart.length, newValue.quantity,newValue.id]
    let itemData = {
      name: newValue.name,
      position: cart.length,
      quantity: newValue.quantity,
      id: newValue.id
    }
    // console.log(item)
    setCart([...cart, item])
  };
  const removeFromCart = e => {
      let value = parseInt(e.target.value)
      setCart(cart.slice(0,value).concat(cart.slice(value + 1)))
  }
  const checkForDuplicates = e => {
    // console.log(e.id)
    // console.log(cart)

    cart.forEach((item, i) => {
      // console.log(item[3])
      if (item[3] == e.id) {
        console.log('duplicate spotted')
        setCart(prevState => ({
          cart: {
            ...prevState.cart,
            [item[i]]: ["test"],
          }
        }))
      }
    })
    console.log(cart)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop updateCart={updateCart} cart={cart}/>}></Route>
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}></Route>
        <Route
          path="/bothlol"
          element={
            <div>
              <Shop updateCart={updateCart} cart={cart}/>
              <Cart cart={cart} removeFromCart={removeFromCart}/>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
