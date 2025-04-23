import React from 'react'
import "../styling/style.css"
import Hero3_sub from './hero3_sub'
import Hero4 from './hero4'
import LG from '../assets/images/LG.png';
import TK from '../assets/images/TK.png';
const Hero3 = () => {
  return (
    <div className='hero3-m'>
    <h1>drive real growth using... seo</h1>
    <div className='in-cont'>
        <div className='in-box block2'>
            <img src={LG} alt="" />
        </div>
        <div className='in-box2 block3'>
            <h2>use grid search</h2>
            <p>Just drop a pin, set your radius, and see how your visibility changes from one location to the next. It's the easiest way to spot ranking gaps, measure local performance, and dominate your service area.</p>
            <div className='just-button2'>
                    <button><a href='#signup-form'>Sign Up</a></button>
                </div>
        </div>
    </div>
    <Hero3_sub /> 
    <div className='in-cont'> 
        <div className='in-box block2'>
            <img src={TK} alt="" />
        </div>
        <div className='in-box2 block3'>
            <h2>monitor keywords</h2>
            <p>Add the keywords that matter most to your business and see how your rankings change across days, weeks, or months. Identify trends, measure the impact of your efforts, and make smarter decisions backed by real-time data.</p>
            <div className='just-button2'>
                    <button><a href='#signup-form'>Sign Up</a></button>
                </div>
        </div>
    </div>
    <Hero4/>
</div>
  )
}

export default Hero3