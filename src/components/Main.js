import React from 'react';
import { ResourceSection } from './ResourceSection'; // Resource iteration
import { CategorySection } from './CategorySection'; // Category iteration

export const Main = () => {
  return (
    <>
      <div className='max-w-[85%] block relative mr-auto mb-12 ml-auto'>
        <CategorySection />
        <ResourceSection />
      </div>
    </>
  );
};
