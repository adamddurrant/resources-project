import React from 'react';
import { resourceData } from '../data/data.js'; // data file array object
import { Card } from './Card.js';

export const ResourceSection = () => {
  return (
    <>
      <div className='relative max-sm:w-[100%] z-0 mt-3 block overflow-hidden'>
        {resourceData.map((data) => (
          //Iterate through resourceData array with callback function and map it to props sent to every card
          <Card
            key={data.ID}
            imgSource={data.Logo}
            name={data.Name}
            description={data.Description}
            top={data.Favourite}
          />
        ))}
      </div>
    </>
  );
};
