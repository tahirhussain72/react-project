import React from 'react'
import'./artical.css'
import { images } from '../../data/assets'
const Artical = () => {
  return (
    <div className='artiacal'>
    <div className="row">
        <div className="col-md-4">
            <h3>OUR BLOG</h3>
            <h1 className='blog-heading'>Read Latest Articles</h1>
            <p className='blog-para'>A  wonderful serenity has taken possession of my entire soul, like these sweet mornings.</p>
            <button className='blog-btn'>ALL POSTS</button>
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
            <div className="hero">
            <img src={images.hero} alt="" />
            <div className='artical-overlay'>
               <span>May 11,2021</span>
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

export default Artical
