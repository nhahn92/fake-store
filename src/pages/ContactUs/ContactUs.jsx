import React, { useContext } from 'react'
import './ContactUs.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import Modal from 'react-modal';

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
    paddingBottom: '45px'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
};

// Make sure to bind Modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function ContactUs() {
  // Dark Mode state
  // Change to use global state
  // Note: {} not []
  const {darkMode} = useContext(ThemeContext)

  // Create state to control Modal
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={darkMode?"contact-us-container contact-us-dark" : "contact-us-container"}>
        <h1>Contact Us</h1>
        <form className="contact-us-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <textarea rows="6" placeholder="Write your message here"></textarea>
          <div className="form-buttons-container">
            <button type="submit" className="modal-button" onClick={() => setIsOpen(true)}>Submit</button>
            <button type="reset" className="modal-button">Reset</button>
          </div>
        </form>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Contact Us Modal"
        >
          <div className="thank-you-modal-header">
            <button className="modal-close-button" onClick={() => setIsOpen(false)}>x</button>
          </div>
          <p>Thank you for contacting us!</p>
        </Modal>
    </div>
  )
}

export default ContactUs