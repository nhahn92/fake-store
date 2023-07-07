import React, { useContext } from 'react'
import './Checkout.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import CheckoutCard from '../../components/CheckoutCard/CheckoutCard'

// Modal from react-modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Inter, sans-serif',
    height: '350px',
    width: '550px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

// Make sure to bind Modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function Checkout() {
  // Change to use global state
  // Note: {} not []
  const {darkMode} = useContext(ThemeContext)

  const {cart} = useContext(CartContext)

  // Create state to control Modal
  const [isOpen, setIsOpen] = React.useState(false)

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
        cart.length > 0?
        cart.map(item => <CheckoutCard
            key={item.id}
            product={item} />)
        :
        <p className="empty-cart-message">There are no items in your cart yet.</p>
      }
      <div className={darkMode?"checkout-footer-container checkout-dark" : "checkout-footer-container"}>
        <div className="checkout-footer-contents-container">
          <div>
            <p>Total</p>
            <p>{total.toFixed(2)} €</p>
          </div>
          <button className="checkout-button" onClick={() => setIsOpen(true)}>Checkout</button>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            contentLabel="Contact Us Modal"
          >
            <div className="checkout-modal-container">
              <p>Your Order was successful!</p>
              <p>Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
              <Link to="/"><button className="modal-button">Return to Main Page</button></Link>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Checkout