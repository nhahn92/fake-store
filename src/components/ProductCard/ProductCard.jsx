import React, { useContext } from 'react'
import './ProductCard.css'
import { BiHeartCircle } from "react-icons/bi"
import { ThemeContext } from '../../contexts/ThemeContext'

function ProductCard({product}) {
  // Change to use global state
  // Note: {} not []
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode?"product-card product-card-dark" : "product-card"}>
        <BiHeartCircle className="heart-icon" />
        <div className="product-image-container">
          <img src={product?.image} />
        </div>
        <div className="product-details-container">
            <p className="bold-product-text">{product?.title}</p>
            <p>{product?.category}</p>
        </div>
        <div>
            <p className="bold-product-text">{product?.price} €</p>
        </div>
    </div>
  )
}

export default ProductCard