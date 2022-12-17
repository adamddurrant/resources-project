import React from 'react';
import { ResourceSection } from './ResourceSection'; // Resource iteration
import { CategorySection } from './CategorySection'; // Category iteration

export const Main = () => {
  return (
    <>
      <div className='max-w-[1100px] max-[1000px]:max-w-[92%] block relative mr-auto mb-12 ml-auto'>
        <CategorySection />
        <ResourceSection />
      </div>
    </>
  );
};
