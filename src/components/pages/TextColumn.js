import React from 'react';

export default function TextColumn({ children }) {
  return (
    <div className='text-content-wrapper'>
      <div className='text-column'>
        {children}
      </div>
    </div>
  );
}
