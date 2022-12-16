import React from 'react';

export const Card = ({ name, description, imgSource }) => {
  return (
    <>
      <div className='resource-item'>
        <div className='resource-icon'>
          <img className='item-icon' src={imgSource} alt='' />
        </div>
        <div className='resource-name'>{name}</div>
        <div className='resource-description'>{description}</div>
      </div>
    </>
  );
};
