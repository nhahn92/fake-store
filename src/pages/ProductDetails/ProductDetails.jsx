import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'

function ProductDetails() {
    // This page shows the details for a specific product
    // The ID is in the URL, so the parameter must be retrieved
    const {productId} = useParams()

    // Create state to hold data from API
    const [product, setProduct] = useState('')

    // https://fakestoreapi.com/products/1

    useEffect(
        () => {
            // Make API call to get the data
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res.data)
                // Store the data in state
                setProduct(res.data)
            })
            .catch(err => console.log(err))
        }, [] // Run once when the page loads
    )

  return (
    <div className="product-container">
        <img src={product?.image} />
        <div className="details-container">
            <h2>{product?.title}</h2>
            <h2>{product?.price} €</h2>
            <h3>Description</h3>
            <p>{product?.description}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails