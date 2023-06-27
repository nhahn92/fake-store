import React, { useContext } from 'react'
import './Header.css'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { ThemeContext } from '../../contexts/ThemeContext'

function Header() {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"header-container header-dark" : "header-container"}>
      <div>
        <h1>Fake Store</h1>
        <button className={darkMode?"theme-button theme-button-dark" : "theme-button"}
          onClick={() => setDarkMode(!darkMode)}>
            {
              darkMode?"Light Mode" : "Dark Mode"
            }
        </button>
      </div>
      <div className="shopping-cart-container">
          <HiOutlineShoppingCart />
          <div className="shopping-cart-number-container">
              <p>1</p>
          </div>
      </div>
    </div>
  )
}

export default Header