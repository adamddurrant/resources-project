import React from 'react';
import { categoryData } from '../data/categories.js'; // data file array object
import { Filter } from './Filter.js';

export const CategorySection = () => {
  return (
    <div>
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
  );
};
