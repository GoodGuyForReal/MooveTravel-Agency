import React from 'react'
import { Button, PrButton } from '../button/Button.jsx';
import bgvideo from '../assets/bg-video.mp4'
import herostyle from './Hero.module.css';

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let alldate =`${year}-${month}-${day}`;

const Hero = () => {
  return (
    <section className={herostyle.hero}>
      <div className={herostyle.overlays}>
        <video src={bgvideo} className='bgvideo' autoPlay loop muted />
      </div>
      <div className={herostyle.heroContent}>
        <h1 className={herostyle.herotitle}>ADVANTURE AWAITS</h1>
        <h4 className={herostyle.alttitle}>What are you waiting for?</h4>
        <div className='btns'>
          <Button />
          <PrButton />
        </div>
        <div className="searchBox">
          <input type="text" />
          <input type="date" className='dateBox'value={alldate} min={alldate} max="2025-12-31"/>
        </div>
      </div>
    </section>
  )
}

export default Hero