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
import Features from './components/Features';

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <AboutUs />
    <News />
    <Support />
    <Features />
    <WantToKnowMore />
    <Resources />
    <BecomeSupport />
    <ContactUs />
    <Footer />
    </>
  )
}

export default LandingPage;