import React from 'react'
import './loaction.css'

const Loaction = () => {
  return (
    <div className='loaction'>
    <div className="row google-loaction">
        <div className="col-md-6">
        <iframe className='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26572.969486866656!2d73.04404333559083!3d33.64106289208879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94df4757096d%3A0x4a21728543b52192!2sSatellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1684673690720!5m2!1sen!2s" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='google-map'></iframe>
        </div>
        <div className="col-md-6">
            <div className='form-heading'>
                <h1>Request For Quote</h1>
                <p>A wonderful serenity has taken possession of my entire soul</p>
                <h4>I would like to discuss:</h4>
                <form action="">
                    <div className="row input-flied">
                        <div className="col-md-6 ">
                            <input type="text" placeholder='How To Assits You' />
                        </div>
                        <div className="col-md-6">
                        <input type="text" placeholder='How To Assits You' />
                        </div>
                        <div className="col-md-6">
                        <input type="text" placeholder='How To Assits You' />
                       
                        </div>
                        <div className="col-md-6">
                      
                        <button className='form-btn'>SUBMIT REQUEST</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Loaction
