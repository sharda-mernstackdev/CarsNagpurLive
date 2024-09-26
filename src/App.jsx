import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './Component/Footer'

import Home from './Component/Home'
import UsedCars from './Component/UsedCars'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/usedcars" element={<UsedCars/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
