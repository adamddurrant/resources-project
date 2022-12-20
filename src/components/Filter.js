import React from 'react';
import { useEffect } from 'react';

export const Filter = ({
  name,
  slug,
  letter,
  colour,
  resources,
  setFiltered,
  setActive,
  active,
}) => {
  useEffect(() => {
    if (active === null) {
      setFiltered(resources); //if active is null, return everything
      return;
    }

    const filtered = resources.filter((resource) =>
      resource.Categories.includes(active)
    );
    setFiltered(filtered);
  }, [active]); // the square brackets here will trigger useEffect function to run ONLY when activeGenre() changes

  const bg = { backgroundColor: colour };

  return (
    <>
      <button onClick={() => setActive(slug)} className='block mt-2'>
        <h4
          class='static inline-block overflow-hidden w-10 h-10 mt-1 mr-5 mb-0 pt-2 pl-0 rounded text-center no-underline font-bold'
          style={bg}
        >
          {letter}
        </h4>
        <div class='relative inline-block overflow-hidden text-sm font-bold top-[-12px]'>
          {name}
        </div>
      </button>
    </>
  );
};
