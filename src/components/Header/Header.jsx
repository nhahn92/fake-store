import React from 'react'
import './Header.css'
import { HiOutlineShoppingCart } from 'react-icons/hi'

function Header() {
  return (
    <div className="header-container">
        <h1>Fake Store</h1>
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