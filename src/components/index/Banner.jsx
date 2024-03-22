import React from 'react'
import typewriter from '../js/body'
import photos from '../photos/banner.jpg'
export default function Banner() {
  return (
    <>
       <div className='container main-banner'>
        <div className='banner-content'>
            <h2>Welcome to <span>code16</span></h2>
            <p>learn <span className="animatedText"></span></p>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat numquam alias nesciunt consequuntur iusto?</p>
        </div>
        <div className='banner-image'>
            <img src={photos} alt="banner-img" />
        </div>
       </div>
    </>
  )
}
