import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Header/Footer/Footer'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
