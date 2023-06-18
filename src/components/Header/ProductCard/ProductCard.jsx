import React from 'react'
import './ProductCard.css'
import { BiHeartCircle } from "react-icons/bi"

function ProductCard({product}) {
  return (
    <div className="product-card">
        <BiHeartCircle className="heart-icon" />
        <img src={product?.image} />
        <div>
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