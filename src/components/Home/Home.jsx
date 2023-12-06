import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import AboutUs from './AboutUs/AboutUs'
import HowItWorks from './HowItWorks/HowItWorks'
import Feedback from './Feedback/Feedback'
import Footer from '../commonComponents/Footer/Footer'

const Home = () => {
  return (
    <div>
        <HomeHeader/>
        <AboutUs/>
        <HowItWorks/>
        <Feedback />
        <Footer />
    </div>
  )
}

export default Home