import React, { useState, createContext } from 'react';
import { categoryData } from '../data/categories.js'; // data file array object
import { Filter } from './Filter.js';

export const CategorySection = ({
  resources,
  setFiltered,
  setActive,
  active,
}) => {
  return (
    <>
      <div className='width-[20%] relative z-0 max-sm:w-[100%] md-max:w-[100%] md:overflow-visible overflow-hidden mt-1 inline-block mr-4 mb-1 float-left'>
        <div class='mb-2 text-base font-bold uppercase mb-[20px]'>
          categories
        </div>
        <button onClick={() => setActive(null)} className='prebump block mt-2'>
          <h4 class='bump static inline-block overflow-hidden w-10 h-10 mt-1 mr-5 mb-0 pt-2 pl-0 rounded text-center no-underline font-bold border'>
            A
          </h4>
          <div class='relative inline-block overflow-hidden text-sm font-bold top-[-12px]'>
            All Resources
          </div>
        </button>

        {categoryData.map((data) => (
          //Iterate through categoryData array with callback function and map it to props sent to every Filter component

          <Filter
            key={data.ID}
            slug={data.Slug}
            name={data.Name}
            letter={data.Letter}
            colour={data.Colour}
            resources={resources}
            setFiltered={setFiltered}
            setActive={setActive}
            active={active}
          />
        ))}
      </div>
    </>
  );
};
