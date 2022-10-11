import React from 'react'
import { Button, PrButton } from '../button/Button.jsx';
import bgvideo from '../assets/bg-video.mp4'
import herostyle from './Hero.module.css';

const Hero = () => {
  return (
    <section className={herostyle.hero}>
      <video src={bgvideo} className='bgvideo' autoPlay loop muted />
      <div className={herostyle.heroContent}>
        <h1>ADVANTURE AWAITS</h1>
        <h4>What are you waiting for?</h4>
        <div className='btns'>
          <Button />
          <PrButton />
        </div>
      </div>
    </section>
  )
}

export default Hero