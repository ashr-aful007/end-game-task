import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shard/Footer/Footer'
import Navbar from '../Shard/Navbar/Navbar'

function Main() {
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Main