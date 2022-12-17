import React from 'react';

export const Card = ({ name, description, imgSource, top }) => {
  const favourited = top ? (
    <div
      className='best absolute left-[48px] top-auto right-auto mt-7 bottom-[56px] block pb-0 pl-8 bg-no-repeat bg-topicon'
      style={{ backgroundImage: `url(/images/love.png)` }}
    >
      Top 20 shortlist
    </div>
  ) : null;
  return (
    <>
      <div className='w-[50%] max-sm:w-[100%] max-[1000px]:w-[100%] p-[1%] relative float-left'>
        <a className='max-h-96 h-96 bg-white no-underline cursor-pointer border border-[#dbdde6] flex p-10 flex-col justify-start rounded-2xl hover:shadow-2xl ease-in duration-200 shadow-slate-50	'>
          <img className='w-16 h-auto rounded' src={imgSource} alt={name} />
          <div className='mb-3 text-2xl font-bold mt-5'>{name}</div>
          <div className='text-base no-underline'>{description}</div>
          <img
            className='absolute left-auto top-auto block bottom-[60px] right-12'
            src='/images/arrow-icon.svg'
            alt='arrow'
          />
          {favourited}
        </a>
      </div>
    </>
  );
};
