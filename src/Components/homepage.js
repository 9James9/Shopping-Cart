import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/cart.js";
import Shop from "./Shop/shop.js";
import React, { useState } from "react";
const HomePage = () => {
    const [cart, setCart] = useState("")
    const updateCart = e => {
        setCart(e)
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop updateCart={updateCart}/>}></Route>
        <Route path="/cart" element={<Cart cart={cart}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
