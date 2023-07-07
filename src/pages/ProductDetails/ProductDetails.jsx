import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductDetails.css'
import axios from 'axios'
import { ThemeContext } from '../../contexts/ThemeContext'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'

function ProductDetails() {
    // Change to use global state
    // Note: {} not []
    const {darkMode} = useContext(ThemeContext)

    const {cart, addProduct, removeProduct} = useContext(CartContext)

    // This page shows the details for a specific product
    // The ID is in the URL, so the parameter must be retrieved
    const {productId} = useParams()

    // Create variable to control "Add to Cart" button
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
    <div className={darkMode?"product-container product-container-dark" : "product-container"}>
        <img src={product?.image} />
        <div className="details-container">
            <Link to="/"><BsArrowReturnLeft className="back-arrow-icon" /></Link>
            <h2>{product?.title}</h2>
            <h2>{product?.price} €</h2>
            <h3>Description</h3>
            <p>{product?.description}</p>
            <div className="add-to-cart-button-container">
                {
                    isInCart?
                    <button onClick={() => removeProduct(product?.id)}>Remove from Cart</button>
                    :
                    <button onClick={() => addProduct(product)}>Add to Cart</button>
                }
            </div>
        </div>
    </div>
  )
}

export default ProductDetails