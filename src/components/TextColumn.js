import React from 'react';

const TextColumn = ({ title, content }) => {
  return (
    <div className='text-column'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default TextColumn;
