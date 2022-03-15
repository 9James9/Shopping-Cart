import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/cart.js"
import Shop from "./Shop/shop.js";
const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;