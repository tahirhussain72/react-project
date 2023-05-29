import React from 'react'
import Footer from '../components/footer/Footer'
import Client from "../components/client/Client"
import Choose from '../components/choose/Choose'
import Cases from '../components/cases/Cases'
import Exprience2 from '../components/expriene2/Exprience2'
import AboutSlider from '../components/aboutSlider/AboutSlider'


const About = () => {
  return (
    <div>
  <Choose/>
  <Cases/>
  <Exprience2/>
  <AboutSlider/>
    <Client/>
    
      <Footer/>
    </div>
  )
}

export default About
