import React from 'react';
import { categoryData } from '../data/categories.js'; // data file array object
import { Filter } from './Filter.js';

export const CategorySection = () => {
  return (
    <>
      <div className='relative z-0 overflow-hidden mt-1 bg-white inline-block mr-4 mb-1 float-left'>
        <div class='mb-2 text-base font-bold uppercase mb-[20px]'>
          categories
        </div>
        {categoryData.map((data) => (
          //Iterate through categoryData array with callback function and map it to props sent to every Filter component
          <Filter
            key={data.ID}
            name={data.Name}
            letter={data.Letter}
            colour={data.Colour}
          />
        ))}
      </div>
    </>
  );
};
