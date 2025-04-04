import React from 'react'
import "../styling/style.css"
import Hero3_sub from './hero3_sub'
import Hero4 from './hero4'
const Hero3 = () => {
  return (
    <div className='hero3-m'>
    <h1>Drive real growth using... SEO</h1>
    <div className='in-cont'>
        <div className='in-box'></div>
        <div className='in-box2'>
            <h1>use grid search</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum porro illum, omnis a, amet provident nulla veritatis beatae nam sit quisquam numquam. Ipsum quas, quo explicabo tenetur cum accusamus sapiente.</p>
            <div className='nav-button2'>
                    <button></button>
                </div>
        </div>
    </div>
    <Hero3_sub /> {/* Assuming this is another component */}
    <div className='in-cont'> {/* Separate container for the next row */}
        <div className='in-box' style={{ backgroundColor: "#ffd369" }}></div>
        <div className='in-box2'>
            <h1>monitor keywords</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum porro illum, omnis a, amet provident nulla veritatis beatae nam sit quisquam numquam. Ipsum quas, quo explicabo tenetur cum accusamus sapiente.</p>
            <div className='nav-button2'>
                    <button></button>
                </div>
        </div>
    </div>
    <Hero4/>
</div>
  )
}

export default Hero3