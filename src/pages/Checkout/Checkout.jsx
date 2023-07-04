import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Checkout() {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"checkout-container checkout-container-dark" : "checkout-container"}>
      <div className="checkout-header-container">
        <p className="checkout-item-header">Item</p>
        <p className="checkout-price-header">Price</p>
        <p className="checkout-quantity-header">Quantity</p>
        <p className="checkout-remove-header">Remove</p>
      </div>
      <div className="checkout-contents-container">

      </div>
      <div className="checkout-footer-container">
        <p>Total</p>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Checkout