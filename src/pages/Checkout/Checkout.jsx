import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { CartContext } from '../../contexts/CartContext'
import { FaTrashAlt } from 'react-icons/fa'

function Checkout() {
  // Change to use global state
  // Note: {} not []
  const {darkMode} = useContext(ThemeContext)

  const {cart, removeProduct} = useContext(CartContext)

  return (
    <div className={darkMode?"checkout-container checkout-container-dark" : "checkout-container"}>
      <div className="checkout-header-container">
        <p className="checkout-contents-left">Item</p>
        <div className="checkout-contents-right">
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
      </div>
      {
        cart.map(function(item) {
          return (
            <>
              <div className="checkout-contents-container">
                <div className="checkout-contents-left">
                  <img src={item.image} />
                  <p className="checkout-product-title">{item.title}</p>
                </div>
                <div className="checkout-contents-right">
                  <p>{item.price} €</p>
                  <p>1</p>
                  <FaTrashAlt className="checkout-trashcan-icon" onClick={() => removeProduct(item?.id)} />
                </div>
              </div>
            </>
          )
        })
      }
      <div className="checkout-footer-container">
        <p>Total</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  )
}

export default Checkout