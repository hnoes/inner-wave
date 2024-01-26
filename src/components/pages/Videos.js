import React from 'react';
import '../../App.css';

export default function Videos() {
    const customStyle = {
        marginTop: '20px',
    };

  return (
    <div className='videos-container'>
        <div className='header-image'>
        <h1 className='centered-text'>Video Library</h1>
    </div>

    <div className='text-content-wrapper'>
        <div className='text-column'>
      
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Change Your Breath, Change Your Life
      </h1>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        An Introduction to the Power of Your Breath
      </h2>

      <p style={{ marginBottom: '20px'}}>
      Discover the incredible power of functional breathing and 
      unlock its profound impact on both your physiology and 
      psychology. In this collection of videos, we delve deep 
      into the art of nasal breathing and its remarkable 
      ability to enhance the quality of your life. Nasal 
      breathing is more than just a simple act; it's a gateway 
      to better sleep, reduced stress, and improved overall 
      well-being. Join us on this journey to explore the 
      transformative benefits of breathing consciously, 
      and learn how it can harmonize your body and mind, 
      bringing balance and vitality to every aspect of your 
      life.
      </p>

<div className='video-column'>
    <div style={{ textAlign: 'center', marginBottom: '10px'}}>
      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/ZMUSGllJVSI?si=F2N7BcrfGpT1qltR" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

    <h2 style={{ marginTop: '20px', marginBottom: '20px'}}>
        Learn to connect with your body's intelligence.
    </h2>
      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/l8NDUE6uxDA?si=D379JY--bHS4daDj"
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

    <p style={{ marginTop: '20px', marginBottom: '20px'}}>
        Discover the power of conscious breathing with Patrick McKeown's 
        captivating TEDx Talk.<br />
        In just three to four minutes, learn how to:<br />
        - decongest your nose,<br />  
        -raise your body temperature<br />  
        -trigger your body's relaxation 
        response <br />
        simply by altering your breath.
        Patrick McKeown, a world-renowned expert in the Buteyko Breathing
         Method and author of multiple best-selling books, including 
         "The Oxygen Advantage," "The Breathing Cure," and more, guides you 
         through this transformative journey.
    </p>

      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/mBqGS-vEIs0?si=UyHs_7EDJSjSLRkv" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

      <h1>
      Breathing to Balance Your Nervous System
      </h1>

      <p style={{ marginTop: '20px', marginBottom: '20px'}}>This four-minute breathing exercise will help you go from a sympathetic
        state of stress, to a calm and collected parasympathetic state of 
        relaxation. 
      </p>

      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/-wKExcwVuBM?si=uky3Luntz5D9Ulrj" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/1BfsW3JKSOI?si=gAbeBZ8Mc0hMaB81" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

      <p>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/6Xou5wVEfls?si=8RQX3xDzSnprtG1g" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
      </p>

    </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}
