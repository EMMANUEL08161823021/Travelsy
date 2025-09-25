// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Footer from "./components/Footer"
import Hero from "./components/Hero"
import AppNavbar from "./components/AppNavbar"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
      <AppNavbar/>
      <Hero/>
      <br/>
      <br/>
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Testimonials />
      </div>
      <br/>
      <br/>
      <Footer/>
    </>
  )
}

export default App
