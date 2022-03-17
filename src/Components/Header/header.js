import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'
const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='header__container'>
        <div className='header_nav--container'>
            <ul className='header__navlist'>
                <li className="header__listItem header__listItem--home"onClick={() => navigate("/")}>Home</li>
                <li className="header__listItem header__listItem--shop" onClick={() => navigate("/shop")}>Shop</li>
                <li className="header__listItem header__listItem--cart" onClick={() => navigate("/cart")}>Checkout</li>
                <li className="header__listItem header__listItem--contact" onClick={() => navigate("/bothlol")}>Contact</li>
            </ul>
        </div>
        <div className='header__title--container'>
            <h1 className='header__title'>Zamazonia</h1>
        </div>
    </div>
  )
}

export default Header