import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these breathing exercises to calm your stress!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Explore the hidden power of breathing: Unveiling its profound healing benefits'
              label='Healing'
              path='/videos'
            />
            <CardItem
              src='images/img7.jpg'
              text='Forest Therapy: How Connecting with Natures Breath Enhances Your Health and Well-Being'
              label='Meditate'
              path='/yoga'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='The Healing Power of Breath: Your Guide to Holistic Wellness Through Breathing Techniques'
              label='Wellness'
              path='/yoga'
            />
            <CardItem
              src='images/img4.jpg'
              text='Breathing Your Way to Health: Unlocking the Healing Benefits of Mindful Breathwork'
              label='Wellness'
              path='/breathwork'
            />
            <CardItem
              src='images/img2.jpg'
              text='Breathe Better, Live Better: Exploring How Breathwork Can Transform Your Health'
              label='Wellness'
              path='/videos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
