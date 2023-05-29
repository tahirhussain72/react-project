import React from 'react'
import "./aboutslider.css"
import { images } from '../../data/assets'

const AboutSlider = () => {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active ">
      <div className="carousel-caption">
       
      <p className='slider-para'>“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst.”</p>
      <div className="slider-img">
      <img src={images.slider} alt="" />
      <h4 className='slider-img-text'>Manda Wakeley</h4>
      <p>Dress Designer</p>
      </div>
      </div>
    </div>
    
   
    <div className="carousel-item">
      <div className="carousel-caption">
      
      <p className='slider-para'>“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst.”</p>

      <div className="slider-img">
      <img src={images.slider} alt="" />
      <h4 className='slider-img-text'>Manda Wakeley</h4>
      <p>Dress Designer</p>
      </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="carousel-caption">
        
        <p className='slider-para'>“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst.”</p>
        <div className="slider-img">
      <img className='slider-imge' src={images.slider} alt="" />
      <h4 className='slider-img-text'>Manda Wakeley</h4>
      <p>Dress Designer</p>
      </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default AboutSlider
