import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import CarDetails from './pages/CarDetails'
import Footer from './components/Footer'
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/DashBoard'
import AddCar from './pages/admin/AddCar'
import ManageBookings from './pages/admin/ManageBookings'
import ManageCars from './pages/admin/ManageCars'
import Login from './components/Login'
import {Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

    const {showLogin} = useAppContext();
    const isOwnerPath =useLocation().pathname === '/admin';

    return (
    <> 
      <Toaster />
      {showLogin &&  < Login  /> }    
      {!isOwnerPath && <Navbar  />}

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/admin' element={<Layout />}>
           <Route index element={<DashBoard />} />
           <Route path='add-car' element={<AddCar />} />
           <Route path='manage-bookings' element={<ManageBookings />} />
           <Route path='manage-cars' element={<ManageCars />} />
        </Route>
       </Routes>
       <Footer />
    </>
    
  )
}

export default App
