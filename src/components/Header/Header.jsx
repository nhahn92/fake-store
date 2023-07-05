import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function Header() {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  
  const {cart} = useContext(CartContext)

  return (
    <div className={darkMode?"header-container header-dark" : "header-container"}>
      <div>
        <Link to="/"><h1>Fake Store</h1></Link>
        <button className={darkMode?"theme-button theme-button-dark" : "theme-button"}
          onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode?<BsFillSunFill className="theme-icon" /> : <BsFillMoonFill className="theme-icon" />
            }
        </button>
      </div>
      <Link to="/checkout"><div className="shopping-cart-container">
          <FaShoppingCart />
          <div className="shopping-cart-number-container">
              <p>{cart.length}</p>
          </div>
      </div></Link>
    </div>
  )
}

export default Header