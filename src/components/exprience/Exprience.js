import React from 'react'
import './exprience.css'
import { images } from '../../data/assets'

const Exprience = () => {
  return (
    <div className='exprience'>
    <div className="row">
        <div className="col-md-4 img-overylay">
            <img src={images.overlay} alt="" srcset="" />
            <div className='exp-year'>
            <h1>21</h1>
            <h6>Years Of Exprience</h6>
            </div>
            {/* <div  className='group41'>
                <img src={images.group41} alt="" />
            </div> */}
        </div>
        <div className="col-md-4 struggle ">
                <div >
                    <h4 className='struggles'>YEARS OF STRUGGLE</h4>
                </div>
                <h1 className='strategy'>
                Better Strategy <br/>With Quality <br/>Business
                </h1>
        </div>
        <div className="col-md-4 rightside">
        <p>wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        <button className='btnn'>READ MORE</button>
        <div className='group45'>
        <img src={images.group45} alt="" />
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Exprience
