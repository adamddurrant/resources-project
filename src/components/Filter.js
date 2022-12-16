import React from 'react';

export const Filter = ({ name, letter, colour }) => {
  const bg = { backgroundColor: colour };

  return (
    <a href='#' clasName='category-link'>
      <h4 class='resourceinitial' style={bg}>
        {letter}
      </h4>
      <div class='category-label'>{name}</div>
    </a>
  );
};
