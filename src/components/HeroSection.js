import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/river.MOV' autoPlay loop muted />
      <h1>Inner Wave Wellness</h1>
      <p>Harness Your Breath and Manage Your Stress</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          COACHING <i class="fa-regular fa-envelope-open" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
