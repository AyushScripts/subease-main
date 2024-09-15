import { SignInButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import Header from './Header'
import HeroSection from './HeroSection'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Pricing from './Pricing'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <HeroSection />
        <Features/>
        <HowItWorks />
        <Pricing />
        <Footer/>
    </div>
  )
}

export default LandingPage