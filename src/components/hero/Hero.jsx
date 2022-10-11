import React from 'react'
import { Button, PrButton } from './components/button/Button.jsx';

const Hero = () => {
  return (
    <section className='hero'>
    <div className='hero content'>
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