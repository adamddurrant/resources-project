import React from 'react';
import { ResourceSection } from './ResourceSection'; // Resource iteration
import { CategorySection } from './CategorySection'; // Category iteration
import { resourceData } from '../data/data.js'; // data file array object
import { useState, useEffect } from 'react';

export const Main = () => {
  // state management
  const [resources, setResources] = useState([]); //stores resource data in state
  const [filtered, setFiltered] = useState([]); //a duplicate to be filtered
  const [active, setActive] = useState([]); //stores active state

  useEffect(() => {
    setResources(resourceData); //sets resource data into state variable after render
    setFiltered(resourceData); //sets resource data into state variable after render
  }, []);

  return (
    <>
      <div
        id='resources'
        className='max-w-[1100px] max-[1000px]:max-w-[92%] block relative mr-auto mb-12 ml-auto'
      >
        <CategorySection
          resources={resources}
          setFiltered={setFiltered}
          setActive={setActive}
          active={active}
        />
        <ResourceSection filtered={filtered} />
      </div>
    </>
  );
};
