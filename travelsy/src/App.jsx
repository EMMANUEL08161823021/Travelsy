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
      <Testimonials/>
      <br/>
      <br/>
      <Footer/>
    </>
  )
}

export default App
