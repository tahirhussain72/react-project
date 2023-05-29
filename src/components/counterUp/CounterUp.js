
import './counterup.css'
import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { images } from '../../data/assets'

const CounterUp = () => {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
    <div className='counterup'>
    <div className='counter-main-heading'>
        <h3>OUR FACTS</h3>
        <h1 className='main-h1'>We Are Enriched With Our Awesome Funfacts</h1>
        <p className='counter-para'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy</p>
    </div>
    <div className="row main-counter">
   
        <div className="col-md-3 ">
            <h1 className="counter-h1">
                {counterOn &&
                <CountUp start={0} end={24} delay={2}/>}
                K+
            </h1>
            <span className="counter-text">Happy clients</span>
        </div>
        <div className="col-md-3">
        <h1 className="counter-h1">
                {counterOn &&
                <CountUp start={0} end={27} delay={2}/>}
                +
            </h1>
            <span className="counter-text">Expert Team</span>
        </div>
        <div className="col-md-3">
        <h1 className="counter-h1">
                {counterOn &&
                <CountUp start={0} end={17} delay={2}/>}
                +
            </h1>
            <span className="counter-text">Awards Winner</span>
        </div>
        <div className="col-md-3">
        <h1 className="counter-h1">
                {counterOn &&
                <CountUp start={0} end={154} delay={2}/>}
                +
            </h1>
            <span className="counter-text">Positive Reviews</span>
        </div>
        <div className='counter-bg-img'>
        <img src={images.group41} alt="" />
    </div>
    </div>
    
    </div>
    </ScrollTrigger>
  )
}

export default CounterUp
