import React, { useEffect, useState } from 'react';
import '../styling/App.css';
import '../styling/style.css';
import logo from '../assets/images/logo.png';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    const [first, setFirst] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirst(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <div id='hero-section'>
                <div className='marker-div'>
                    <div className='main-box'>
                        <Grid first={first} />
                        <div className='search-bar'>
                            <p>
                                <TypeAnimation
                                    sequence={['HQ Dallas Studio', 1000]}
                                    wrapper="span"
                                    speed={20}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className='info-div'>
                        <h1>track your local efforts</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum recusandae eligendi maiores accusamus quia tempore. Velit nam quasi laboriosam rerum dolore, autem voluptatem repudiandae, ipsum laudantium qui soluta temporibus nulla!</p>
                        <button className='sgn-btn'>Sign Up</button>
                </div>
            </div>
        </>
    );
}

const Marker = ({ value, isActive }) => {
    const styles = {
        background: isActive ? '#17B169' : '#ffd369',
        color: isActive ? '#ffffff' : '#263f44'
    };

    return (
        <div style={styles} className='marker'>
            <p>{value}</p>
        </div>
    );
};


function Grid({ first }) {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const grid = Array.from({ length: 6 }, () =>
        Array.from({ length: 6 }, () => (first ? getRandomInt(1, 3) : 'X'))
    );

    return (
        <>
            {grid.map((row, rowIndex) => (
                <div className="grid-line" key={rowIndex}>
                    {row.map((value, colIndex) => (
                        <Marker key={colIndex} value={value} isActive={first} />
                    ))}
                </div>
            ))}
        </>
    );
}

function Header() {
    return (
        <div className='nav-bar'>
            <img src={logo} alt="" />
            <div className='nav-links'>
                <a href="#">Use Case</a>
                <a href="#">About Us</a>
                <a href="#">Resources</a>
                <a href="#">Pricing</a>
            </div>
            <div className='nav-button'>
                <button>Sign Up</button>
            </div>
        </div>
    );
}