import React from 'react'
import './photo.css'
import { images } from '../../data/assets'
const Photo = () => {
  return (
    <div className='photo'>
    <div className="row main-photo">
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.video} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.hero} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.photo3} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>  
    </div>
    <div className="row Second-photo">
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.photo4} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.photo5} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.photo6} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
    </div>
      <div className="row third-photo">
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.photo7} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.video} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
        <div className="col-md-4">
        <div className='hero'>
            <img src={images.hero} alt="" />
            <div className='artical-overlay'>
               <span>May 11, 2021</span>
               <h4>
                <a href="/">
                Finance is the process of channeling money  
                </a>
               </h4>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
