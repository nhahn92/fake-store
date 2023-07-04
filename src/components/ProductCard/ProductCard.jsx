import React, { useContext, useEffect } from 'react'
import './ProductCard.css'
import { BsHeartFill, BsHeart } from "react-icons/bs"
import { ThemeContext } from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

function ProductCard({product}) {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const {cart, addProduct, removeProduct} = useContext(CartContext)

  // Create variable to control heart icons
  // Change to state
  const [isInCart, setIsInCart] = React.useState(false)

  // Need to check if this product is in the cart
  // any time cartContents changes
  useEffect (
    () => {
      // Is this product in the cart?
      setIsInCart(cart.find(item => item.id == product.id))
    }
  ), [cart] // Runs when cartContents changes

  return (
    <div className={darkMode?"product-card product-card-dark" : "product-card"}>
        {
          isInCart?
          <BsHeartFill className="heart-icon" onClick={() => removeProduct(product?.id)} />
          :
          <BsHeart className="heart-outline-icon" onClick={() => addProduct(product)} />
        }
        <div className={darkMode?"product-image-container product-image-container-dark" : "product-image-container"}>
          <img src={product?.image} />
        </div>
        <div className="product-details-container">
            <p className="bold-product-text">{product?.title}</p>
            <p>{product?.category}</p>
        </div>
        <div>
            <p className="bold-product-text">{product?.price} €</p>
        </div>
        <Link to={`/details/${product.id}`}><button className="see-details-button">See Details</button></Link>
    </div>
  )
}

export default ProductCard