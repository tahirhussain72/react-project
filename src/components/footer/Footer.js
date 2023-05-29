import React from 'react'
import { images } from '../../data/assets'

import { topMenuLeft } from "../../data/constant/menuItem";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="row footer-data">
    <div className="col-md-3">
        <div className='footer-icon'>
            <img src={images.footer1} alt="" />
        </div>
        <div className="footer-icons">
        {
                     topMenuLeft.map((item, i) => (
                        <div key={i}>
                           <span>{item.icon}</span>
                           {item.text}

                        </div>
                     ))
                  }
                  </div>

    </div>
    <div className="col-md-3">
        <h4 className='footer-heading'>Useful Links</h4>
        <ul className='footer-link'>
            <li>About Us</li>
            <li>Out Team</li>
            <li>Our Serivces</li>
            <li>News</li>
            <li>Career</li>
        </ul>
    </div>
    <div className="col-md-3">
    <h4 className='footer-heading'>What We Do</h4>
    <ul className='footer-link'>
            <li>Financial Advice</li>
            <li>Planning Strategies</li>
            <li>Taxation Planning</li>
            <li>Investment Trading</li>
            <li>Wealth Marketing</li>
        </ul>
    </div>
    <div className="col-md-3">
    <h4 className='footer-heading'>Newsletter</h4>
    <h5 className='footer-link'>Get in your inbox the latest News</h5>
    <div className='footer-form'>
    <input type="text" placeholder='Your Name*' />
    <input type="email" placeholder='Email Address*' />
    <button className='footer-btn'>SUBSCRIBE</button>
    </div>
    </div>
    </div>
      <div className="copy-right">
        <p>© 2023 Agency Finance - Phlox Elementor WordPress Theme. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
