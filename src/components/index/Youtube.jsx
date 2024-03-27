import React from 'react'
import banner from '../photos/banner.jpg'
export default function Youtube() {
    return (
        <div className='container youtube'>
            <div className="youtube-left btn">
                <h1>Learn With <span>CODE 16 Videos</span></h1>
                <b>You can also join our Youtube Channel</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro, animi cupiditate accusamus aspernatur placeat ut cum nulla, voluptas eum labore neque adipisci suscipit quaerat</p>
                <button><a href="#">Subscribe</a></button>
            </div>
            <div className="youtube-right">
                <div className='youtube-main btn'>
                    <div className="youtube-one">
                        <img src={banner} alt="" />
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
                <div className='youtube-main handel btn'>
                    <div className="youtube-one">
                        <img src={banner} alt="" />
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
                <div className='youtube-main btn'>
                    <div className="youtube-one">
                        <img src={banner} alt="" />
                    </div>
                    <div className='youtube-desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <button><a href="#">Start Learning...</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
