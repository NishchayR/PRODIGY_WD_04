import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import AboutContent from '../components/AboutContent'
import Achive from '../components/Achive'


const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text=""/>
      
      <AboutContent/>
      <Achive/>
      <Footer/>
    </div>
  )
}

export default About
