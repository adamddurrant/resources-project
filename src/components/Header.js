import React from 'react';

export const Heading = () => {
  return (
    <div className='isolate bg-white'>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 678'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fillOpacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#9089FC' />
              <stop offset={1} stopColor='#FF80B5' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <main>
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl pt-10 pb-32 sm:pt-40 sm:pb-40'>
            <div>
              <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                <div className='relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6'>
                  <span className='text-gray-600 uppercase'>
                    The SEO Toolbox
                  </span>
                </div>
              </div>
              <div>
                <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
                  A Curated List of the Best SEO Resources on Earth
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600 sm:text-center'>
                  Accelerate your learning, productivity and efficiency with a
                  giant list of the worlds best SEO resources, tools, guides,
                  content, extensions, apps and more.
                </p>
                <div className='mt-8 flex gap-x-4 sm:justify-center'>
                  <a
                    href='#'
                    className='inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700'
                  >
                    Get started
                    <span className='text-indigo-200' aria-hidden='true'>
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div class='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
                <svg
                  class='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
                  viewBox='0 0 1155 678'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                    fill-opacity='.3'
                    d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                  ></path>
                  <defs>
                    <linearGradient
                      id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                      x1='1155.49'
                      x2='-78.208'
                      y1='.177'
                      y2='474.645'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stop-color='#9089FC'></stop>
                      <stop offset='1' stop-color='#FF80B5'></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
