import React from 'react'
import Navbar from '../landingPage/components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import ContactUs from './components/ContactUs';
import BecomeSupport from './components/BecomeSupport';
import WantToKnowMore from './components/WantToKnowMore';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Support />
    <WantToKnowMore />
    <BecomeSupport />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage;