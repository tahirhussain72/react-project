import React from 'react'
import './cases.css'
import { images } from '../../data/assets'

const Cases = () => {
  return (
    <div className='cases'>
    <div className='main-heading'>
        <h3>OUR CASES</h3>
        <h1 className='heading'>We Are Here To Manage Your Finance With Experience</h1>
    </div>
    <div className="row main-cases">
        <div className="col-md-6">
            <div className='cases-img'>
                <img src={images.cases} alt="" />
            </div>
              <div>
          <img  className="doted" src={images.group56}alt="" />
          </div>
        </div>
        <div className="col-md-6  cases-data-stats">
          
            

            <div className="data-stats">
              <h4>Finance</h4>
              <div className="cases-progress-bar">
                <span>80%</span>
              </div>
            </div>
            <div className="data-stats">
              <h4>Business</h4>
              <div className="cases-progress-bar progress-bar-2">
                <span>70%</span>
              </div>
            </div>
            <div className="data-stats">
              <h4>Investment</h4>
              <div className="cases-progress-bar progress-bar-3">
                <span>90%</span>
              </div>
            </div>
            <p className='cases-para'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.A wonderful serenity</p>

        </div>
    </div>
      
    </div>
  )
}

export default Cases
