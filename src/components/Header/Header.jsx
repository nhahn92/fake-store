import React, { useContext } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

function Header() {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

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
      <div className="shopping-cart-container">
          <Link to="/checkout"><FaShoppingCart /></Link>
          <div className="shopping-cart-number-container">
              <p>1</p>
          </div>
      </div>
    </div>
  )
}

export default Header