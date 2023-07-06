import React, { useState, useEffect, useContext } from 'react'
import './Checkout.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { CartContext } from '../../contexts/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Checkout() {
  // Change to use global state
  // Note: {} not []
  const {darkMode} = useContext(ThemeContext)

  const {cart, removeProduct} = useContext(CartContext)
  console.log(cart)

  // Find the total price of cart contents
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }

  return (
    <div className={darkMode?"checkout-container checkout-container-dark" : "checkout-container"}>
      <div className={darkMode?"checkout-header-container checkout-dark" : "checkout-header-container"}>
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
              <div className={darkMode?"checkout-contents-container checkout-dark" : "checkout-contents-container"}>
                <div className="checkout-contents-left">
                  <img src={item?.image} />
                  <Link to={`/details/${item.id}`}><p className="checkout-product-title">{item?.title}</p></Link>
                </div>
                <div className="checkout-contents-right">
                  <p className="checkout-product-price">{item?.price} €</p>
                  <p className="checkout-product-quantity">1</p>
                  <FaTrashAlt className="checkout-trashcan-icon" onClick={() => removeProduct(item?.id)} />
                </div>
              </div>
            </>
          )
        })
      }
      <div className={darkMode?"checkout-footer-container checkout-dark" : "checkout-footer-container"}>
        <div className="checkout-footer-contents-container">
          <div>
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout