import React from 'react'
import "../styling/style.css"
import cw from '../assets/images/CW.png';
const Hero3_sub = () => {
  return (
    <div className='in-cont'>
      <div className='in-box2 block2 block4'>
        <h2>crawl any website</h2>
        <p>Whether you're auditing your own site or analyzing a competitor, our crawler gives you deep insights in just a few clicks. Discover what’s working for others, spot missed opportunities, and build smarter local SEO strategies with real data.</p>
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