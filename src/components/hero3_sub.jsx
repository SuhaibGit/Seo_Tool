import React from 'react'
import "../styling/style.css"
import cw from '../assets/images/CW.png';
const Hero3_sub = () => {
  return (
    <div className='in-cont'>
      <div className='in-box2 block2 block4'>
        <h2>crawl any website</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum porro illum, omnis a, amet provident nulla veritatis beatae nam sit quisquam numquam. Ipsum quas, quo explicabo tenetur cum accusamus sapiente.</p>
        <div className='just-button2'>
          <button>Sign up</button>
        </div>
      </div>
      <div className='in-box block3'>
        <img src={cw} alt="" />
      </div>
    </div>
  )
}

export default Hero3_sub