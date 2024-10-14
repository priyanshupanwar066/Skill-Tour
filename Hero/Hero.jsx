import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' name='hero' id='hero'>
      <div className="hero-text">
        <h1>Empowering Education for a Brighter Future</h1>
        <p>Join our platform to enhance your coding skills and stay updated with the latest technologies. We provide comprehensive tutorials, guides, and resources to help you thrive in the world of programming.</p>
        <button className='btn'>Discover More <img src={dark_arrow} alt="Explore" /></button>
      </div>
    </div>
  )
}

export default Hero
