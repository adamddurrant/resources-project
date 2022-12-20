import React from 'react';
import { Card } from './Card.js';
import { motion } from 'framer-motion';

export const ResourceSection = ({ filtered }) => {
  return (
    <>
      <motion.div
        layout
        className='relative max-sm:w-[100%] z-0 mt-3 block overflow-hidden'
      >
        {filtered.map((data) => (
          //Iterate through resourceData array with callback function and map it to props sent to every card
          <Card
            key={data.ID}
            imgSource={data.Logo}
            name={data.Name}
            description={data.Description}
            top={data.Favourite}
          />
        ))}
      </motion.div>
    </>
  );
};
