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
import AllCars from './Component/AllCars'
import CarsData from './Component/CarsData'
import Financing from './Component/Financing'
import Insurance from './Component/Insurance'
import VehicleHistory from './Component/VehicleHistory'
import TradeInVlaue from './Component/TradeInVlaue'
import Showroom from './Component/Showroom'
import ServiceCentre from './Component/ServiceCentre'
import DealerShip from './Component/DealerShip'
import TestDriveLocation from './Component/TestDriveLocation'
import MyAppointment from './Component/MyAppointment'
import MyBooking from './Component/MyBooking'
import BecomePartner from './Component/BecomePartner'


function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <Router >
      <Navbar />
      
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>

      <Routes>
        <Route path="/usedcars" element={<AllCars/>} />
      </Routes>

      <Routes>
        <Route path="/cardetails" element={<CarsData/>} />
      </Routes>

      <Routes>
        <Route path="/financing" element={<Financing/>} />
      </Routes>

      <Routes>
        <Route path="/insurance" element={<Insurance/>} />
      </Routes>

      <Routes>
        <Route path="/vehicle-history" element={<VehicleHistory/>} />
      </Routes>

    
    
      <Routes>
        <Route path="/trade-in" element={<TradeInVlaue/>} />
      </Routes>

      <Routes>
        <Route path="/showrooms" element={<Showroom/>} />
      </Routes>

      <Routes>
        <Route path="/service-centers" element={<ServiceCentre/>} />
      </Routes>

      <Routes>
        <Route path="/dealerships" element={<DealerShip/>} />
      </Routes>

      <Routes>
        <Route path="/test-drive-locations" element={<TestDriveLocation/>} />
      </Routes>

      <Routes>
        <Route path="/my-appointments" element={<MyAppointment/>} />
      </Routes>

      <Routes>
        <Route path="/my-bookings" element={<MyBooking/>} />
      </Routes>

      <Routes>
        <Route path="/become-partner" element={<BecomePartner/>} />
      </Routes>


      <Routes>
        <Route path="/cart" element={<AddToCart/>} />
      </Routes>

      <Routes>
        <Route path="/my-orders" element={<MyOrder/>} />
      </Routes>

      {/* <Routes>
        <Route path="/profile" element={<ProfileSettings/>} />
      </Routes> */}


      {/* <Footer/> */}
    </Router>
   
  )
}

export default App
