import React from 'react'
import { images } from '../../data/assets'
import './client.css'

const Client = () => {
  return (
    <div className='client'>
    <div className="row client-data">
        <div className="col-md-2">
          <img src={images.client1} alt="" />
        </div>
        <div className="col-md-2">
          <img src={images.client2} alt="" />
        </div>
        <div className="col-md-2">
          <img src={images.client3} alt="" />
        </div>
        <div className="col-md-2">
          <img src={images.client4} alt="" />
        </div>
        <div className="col-md-2">
          <img src={images.client5} alt="" />
        </div>
        <div className="col-md-2">
          <img src={images.client6} alt="" />
        </div>
    </div>
      
    </div>
  )
}

export default Client
