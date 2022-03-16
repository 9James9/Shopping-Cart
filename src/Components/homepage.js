import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/cart.js";
import Shop from "./Shop/shop.js";
import React, { useState, useEffect } from "react";
const HomePage = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (newValue) => {
    setCart([...cart, [newValue.name, cart.length]])
  };
  const removeFromCart = e => {
      let value = parseInt(e.target.value)
      setCart(cart.slice(0,value).concat(cart.slice(value + 1)))
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
