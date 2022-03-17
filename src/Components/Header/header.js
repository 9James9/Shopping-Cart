import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div>
            <ul>
                <li className="header__listItem header__listItem--home"onClick={() => navigate("/")}>Home</li>
                <li className="header__listItem header__listItem--shop" onClick={() => navigate("/shop")}>Shop</li>
                <li className="header__listItem header__listItem--cart" onClick={() => navigate("/cart")}>Checkout</li>
                <li className="header__listItem header__listItem--contact" onClick={() => navigate("/bothlol")}>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header