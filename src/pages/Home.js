import React from 'react'
// import { images } from '../data/assets'
import MainContain from '../components/main-Contain/MainContain'

import Video from '../components/video/Video'
import Exprience from '../components/exprience/Exprience'
import Contact from '../components/contact/Contact'
import Member from '../components/member/Member'
import Loaction from '../components/loaction/Loaction'
import Client from '../components/client/Client'
import Footer from '../components/footer/Footer'
import Artical from '../components/artical/Artical'



const Home = () => {
  return (
    <>
    <div className="container-fluid mainContain">
      <MainContain/>
      {/* <Slider/> */}
    </div>
    <div>
    <Video/>
    </div>
    <div>
      <Exprience/>
    </div>
    <div>
    <Contact/>
    <Member/>
    <Loaction/>
    <Artical/>
    <Client/>
    <Footer/>
    </div>
    </>
  )
}

export default Home
