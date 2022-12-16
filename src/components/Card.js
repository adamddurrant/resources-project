import React from 'react';

export const Card = ({ name, description, imgSource }) => {
  return (
    <>
      <div className='w-[50%] p-[1%] relative float-left pl-2 pr-2'>
        <a className='max-h-96 h-96 bg-white no-underline cursor-pointer border border-[#dbdde6] flex p-10 flex-col justify-start rounded-2xl hover:shadow-2xl ease-in duration-200 shadow-slate-50	'>
          <img className='w-16 h-auto rounded' src={imgSource} alt={name} />
          <div className='mb-3 text-2xl font-bold mt-5'>{name}</div>
          <div className='mt-5 text-base no-underline'>{description}</div>
          <img
            className='absolute left-auto top-auto block bottom-20 right-12'
            src='/images/arrow-icon.svg'
            alt='arrow'
          />
        </a>
      </div>
    </>
  );
};
