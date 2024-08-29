import React from 'react'
import Hero from '../components/Hero.jsx'
import CallToAction from '../components/CallToAction.jsx'
import Footer from '../components/Footer.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Features from '../components/Features.jsx'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Features />
    <HowItWorks/>
    <Testimonials />
    <CallToAction />
    <Footer />

    </>
  )
}

export default HomePage