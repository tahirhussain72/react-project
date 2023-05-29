import React from 'react'
import './ourblogs.css'
import Photo from '../photo/Photo'
const OurBlogs = () => {
  return (
    <>
    <div className='ourBlog'>
      <h1>BLOGS</h1>
    </div>
    <div>
        <Photo/>
    </div>
    <div className="blog-Btn">
    <button class="circle-button">Load more</button>
    </div>
    </>
  )
}

export default OurBlogs
