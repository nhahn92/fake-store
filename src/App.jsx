import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import ContactUs from './pages/ContactUs/ContactUs'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ThemeContextProvider from './contexts/ThemeContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/details/:productId' element={<ProductDetails />} />
        </Routes>

        <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
