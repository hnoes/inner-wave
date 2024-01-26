import React from 'react';
import '../../App.css';
import TextColumn from './TextColumn';

export default function Breathwork() {
  return (
    <div className='breathwork-page'>
      <h1 className='breathwork'>Breathwork</h1>

      <div className='text-content-wrapper'>
        <div className='text-column'>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Unlock the Power of Your Breath with Nasal Breathing
          </h1>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Functional Breathing for Enhanced Wellness
          </h2>

          <p style={{ marginBottom: '20px' }}>
            Discover the transformative benefits of a functional breathwork practice centered
            around the ancient wisdom of nasal breathing. Dive into a world where each inhale and exhale 
            becomes a pathway to enhanced well-being. Nasal breathing isn't just a 
            simple act; it's a gateway to a healthier, more balanced life. Experience improved sleep, 
            reduced stress, and increased vitality as you connect with your body's 
            innate intelligence through the practice of nasal breathing. 
            Join us on this journey to explore the profound impact of 
            conscious breathwork. Learn how it can harmonize your body and 
            mind, bringing balance and vitality to every aspect of your life.
            Unlock the secrets of nasal breathing and embark on a path to better health 
            and greater mindfulness. Your breath is the key, and we're here to guide you 
            on this remarkable journey. Explore our breathwork resources and elevate your 
            life, one breath at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
