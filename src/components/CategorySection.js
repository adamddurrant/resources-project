import React, { useState } from 'react';
import { categoryData } from '../data/categories.js'; // data file array object
import { Filter } from './Filter.js';
import { resourceData } from '../data/data.js'; // data file array object

export const CategorySection = () => {
  const [resources, setResources] = useState([]);
  return (
    <>
      <div className='width-[20%] relative z-0 max-sm:w-[100%] md-max:w-[100%] md:overflow-visible overflow-hidden mt-1 inline-block mr-4 mb-1 float-left'>
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
