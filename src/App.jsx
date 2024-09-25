import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Footer from './Component/Footer'
=======
import Home from './Component/Home'
>>>>>>> e32ef54 (New message)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
