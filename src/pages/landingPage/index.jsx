import React from 'react'
import Navbar from '../landingPage/components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Support from './components/Support';
import ContactUs from './components/ContactUs';
import BecomeSupport from './components/BecomeSupport';
import WantToKnowMore from './components/WantToKnowMore';
import Resources from './components/Resources';
import News from './components/News';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <News />
    <Support />
    <WantToKnowMore />
    <Resources />
    <BecomeSupport />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage;