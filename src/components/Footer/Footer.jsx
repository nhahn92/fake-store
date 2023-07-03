import React from 'react'
import './Footer.css'
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

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
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

// Make sure to bind Modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function Footer() {
  // Create state to control Modal
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="footer-container">
        <p>Made with &#9829; by mimo</p>
        <a href="#" className="contact-us-button" onClick={() => setIsOpen(true)}>Contact Us</a>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
        >

        <div className="modal-header">
          <Link to={"/contactus"}><button className="modal-button" onClick={() => setIsOpen(false)}>Go to Full-Page Form</button></Link>
          <button className="modal-close-button" onClick={() => setIsOpen(false)}>x</button>
        </div>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4"></textarea>
          <button type="submit" className="modal-button">Submit</button>
          <button type="reset" className="modal-button">Reset</button>
        </form>
      </Modal>
    </div>
  )
}

export default Footer