import React from 'react'
import Navbar from '../landingPage/components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Support />
    <Footer />
    </>
  )
}

export default LandingPage;