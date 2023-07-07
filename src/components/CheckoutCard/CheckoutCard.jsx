import { useContext } from 'react'
import './CheckoutCard.css'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import { CartContext } from '../../contexts/CartContext'
import { FaTrashAlt } from 'react-icons/fa'

function CheckoutCard({product}) {
    // Change to use global state
    // Note: {} not []
    const {darkMode} = useContext(ThemeContext)

    const {removeProduct} = useContext(CartContext)

  return (
    <div className={darkMode?"checkout-contents-container checkout-dark" : "checkout-contents-container"}>
        <div className="checkout-contents-left">
            <img src={product?.image} />
            <p className="checkout-product-title"><Link to={`/details/${product.id}`}>{product?.title}</Link></p>
        </div>
        <div className="checkout-contents-right">
            <p className="checkout-product-price">{product?.price} €</p>
            <p className="checkout-product-quantity">1</p>
            <FaTrashAlt className="checkout-trashcan-icon" onClick={() => removeProduct(product?.id)} />
        </div>
    </div>
  )
}

export default CheckoutCard