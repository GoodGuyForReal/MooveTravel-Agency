import React from 'react'
import { Button, PrButton } from '../button/Button.jsx';
import bgvideo from '../assets/bg-video.mp4'
import herostyle from './Hero.module.css';

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let alldate = `${year}-${month}-${day}`;

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

        </div>
        <div className={herostyle.SearchBox}>
          <div className={herostyle.inpBody}>
            <h3 className={herostyle.inptitle}>Destination</h3>
            <input type="search" placeholder='Search any place' className={herostyle.desinp} />
          </div>

          <div className={herostyle.inpBody}>
            <h3 className={herostyle.inptitle}>When start</h3>
            <input type="date" className={herostyle.desinp} value={alldate} min={alldate} max="2025-12-31" />
          </div>

          <div className={herostyle.inpBody}>
            <h3 className={herostyle.inptitle}>Many People</h3>
            <input type="number" placeholder='How many people' className={herostyle.desinp} />
          </div>

          <PrButton />
        </div>
      </div>
    </section>
  )
}

export default Hero