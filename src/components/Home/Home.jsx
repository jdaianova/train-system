import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
import AboutUs from './AboutUs/AboutUs'
import HowItWorks from './HowItWorks/HowItWorks'
import Feedback from './Feedback/Feedback'

const Home = () => {
  return (
    <div>
        <HomeHeader/>
        <AboutUs/>
        <HowItWorks/>
        <Feedback />
    </div>
  )
}

export default Home