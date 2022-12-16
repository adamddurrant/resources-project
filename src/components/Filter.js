import React from 'react';

export const Filter = ({ name, letter, colour }) => {
  const bg = { backgroundColor: colour };

  return (
    <>
      <a href='#' className='block mt-2'>
        <h4
          class='static inline-block overflow-hidden w-10 h-10 mt-1 mr-5 mb-0 pt-2 pl-0 rounded text-center no-underline font-bold'
          style={bg}
        >
          {letter}
        </h4>
        <div class='relative inline-block overflow-hidden text-sm font-bold top-[-12px]'>
          {name}
        </div>
      </a>
    </>
  );
};
