import React from 'react'
import './ProductCard.css'
import { BiHeartCircle } from "react-icons/bi"

function ProductCard({product}) {
  return (
    <div className="product-card">
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