import { useState, createContext, useEffect } from 'react'
// Use hook to create context
export const CartContext = createContext()

// Remember to add CartContextProvider to App.jsx
// Wrap it around pages
export default function CartContextProvider(props) {
    // Create state
    const [cart, setCart] = useState([])

    useEffect (
        () => {
            // Check local storage for initial value
            const storedCart = localStorage.getItem('cartList')
            // Check if something is there
            if (storedCart) {
                // Use this value to initialize state
                setCart(JSON.parse(storedCart))
            }

        }, [] // Run once when component loads
    )

    useEffect (
        () => {
            // Save current state to local storage when cart changes
            localStorage.setItem('cartList', JSON.stringify(cart))

        }, [cart] // Run when cart changes
    )

    const addProduct = (productToAdd) => {
        console.log('adding', productToAdd)
        // Add this product to cart
        let newCart = [...cart, productToAdd]
        console.log(newCart)
        setCart(newCart)
    }

    const removeProduct = (productId) => {
        console.log('removing id', productId)
        // Remove this product from cart
        let newCart = cart.filter(item => item.id != productId)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct}}>
            {props.children}
        </CartContext.Provider>
    )
}