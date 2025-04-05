import React from 'react'
import "../styling/style.css"
import Hero3_sub from './hero3_sub'
import Hero4 from './hero4'
const Hero3 = () => {
  return (
    <div className='hero3-m'>
    <h1>drive real growth using... seo</h1>
    <div className='in-cont'>
        <div className='in-box block2'></div>
        <div className='in-box2 block3'>
            <h1>use grid search</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum porro illum, omnis a, amet provident nulla veritatis beatae nam sit quisquam numquam. Ipsum quas, quo explicabo tenetur cum accusamus sapiente.</p>
            <div className='just-button2'>
                    <button>Sign Up</button>
                </div>
        </div>
    </div>
    <Hero3_sub /> {/* Assuming this is another component */}
    <div className='in-cont'> {/* Separate container for the next row */}
        <div className='in-box block2' style={{ backgroundColor: "#ffd369" }}></div>
        <div className='in-box2 block3'>
            <h1>monitor keywords</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum porro illum, omnis a, amet provident nulla veritatis beatae nam sit quisquam numquam. Ipsum quas, quo explicabo tenetur cum accusamus sapiente.</p>
            <div className='just-button2'>
                    <button>Sign Up</button>
                </div>
        </div>
    </div>
    <Hero4/>
</div>
  )
}

export default Hero3