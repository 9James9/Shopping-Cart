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
      //creates new cart array with old values up until the index to delete, then from the index to delete + 1
    // if (e.target.value !== -1) {
    //     let firstSlice = cart
    //     let secondSlice = cart
    //     console.log(...firstSlice.slice(0,e.target.value))
    //     setCart([
    //         ...firstSlice.slice(0,e.target.value),
    //         ...secondSlice.slice(e.target.value + 1)
    //     ])
    // }


    // let newCart = cart.forEach(item => {
    //   // console.log(item[1])
    //   item.filter((x,y) => {
    //     console.log(y)
    //     console.log(e.target.value)
    //     console.log( e.target.value.toString() == y)
    //     return y !== e.target.value
    //   })
    // })
    // console.log(newCart)
      // console.log(cart.slice(0,e.target.value))

      let value = parseInt(e.target.value)
      // if (value == 0) {
      //   console.log(cart.slice(1))
      // } else if (
      //   value == cart.length - 1
      // ) {
      //   console.log(cart.slice(0,value))
      // } else {
      //   console.log(value + 1)
      //         console.log(cart.slice(value + 1))
      // }

      
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
