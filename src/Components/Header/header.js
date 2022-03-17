import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <ul>
                <li onClick={() => navigate("/")}>Home</li>
                <li onClick={() => navigate("/shop")}>Shop</li>
                <li onClick={() => navigate("/cart")}>Checkout</li>
                <li onClick={() => navigate("/bothlol")}>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header