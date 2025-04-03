import React, { useState } from 'react';
import '../styling/App.css'
export default function HeroSection() {
    return (
        <>
            <Header />
            <div id='hero-section'>
                <div className='marker-div'>
                    <div className='main-box'>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                        <div className='grid-line'>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                            <div className='marker'></div>
                        </div>
                    </div>
                    <div className='search-bar'><p>HQ Dance Studio Dallas</p></div>
                </div>
                <div className='info-div'>
                    <h1>track your local efforts</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti, optio quas libero, rem facere quaerat quam earum corporis soluta perferendis beatae maiores molestias aperiam porro nobis. Exercitationem, obcaecati vel!</p>
                    <button className='sgn-btn'>Sign Up</button>
                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        <>
            <div className='nav-bar'>
                <div className='nav-links'>
                    <a href="http://">Use Case</a>
                    <a href="http://">About Us</a>
                    <a href="http://">Resources</a>
                    <a href="http://">Pricing</a>
                </div>
                <div className='nav-button'>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}