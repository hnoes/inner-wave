import React, { useState } from 'react';
import '../../App.css';

export default function Coaching() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the entered email here, such as sending it to a server or displaying a thank you message.
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <div className='coaching'>
      <div className='header-image'>
        <h1>LIKE & SUBSCRIBE</h1>
      </div>
      <div className="email-form">
        <p>Enter your email address to stay updated:</p>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Your email address'
            value={email}
            onChange={handleEmailChange}
            style={{
              width: '100%', // Make the input box full-width
              padding: '10px', // Add some padding for spacing
            }}
          />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  );
}
