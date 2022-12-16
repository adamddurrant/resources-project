import React from 'react';
import { resourceData } from '../data/data.js'; // data file array object
import { Card } from './Card.js';

export const ResourceSection = () => {
  return (
    <div className='relative z-0 overflow-hidden mt-3 block px-16'>
      {resourceData.map((data) => (
        //Iterate through resourceData array with callback function and map it to props sent to every card
        <Card
          key={data.ID}
          imgSource={data.Logo}
          name={data.Name}
          description={data.Description}
        />
      ))}
    </div>
  );
};
