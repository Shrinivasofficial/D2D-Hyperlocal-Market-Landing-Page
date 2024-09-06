import React from 'react';
import img1 from '../Assets/img1.png';

export const Hero = () => {
  return (
    <div className='mt-24 px-6 md:mt-48 md:px-24'>
      <div className='flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0'>
        <div className='flex flex-col space-y-6 max-w-lg text-center md:text-left'>
          <h3 className='text-green-600 font-semibold text-lg'>D2D - Your hyperlocal delivery platform
          </h3>
          <h1 className='text-3xl md:text-5xl font-semibold leading-tight'>
            We bring the store to your door
          </h1>
          <p className='text-gray-500 tracking-relaxed text-base md:text-lg leading-relaxed'>
            Fresh, local, and carefully sourced groceries—delivered straight to you in just 8 minutes.
            Because convenience should never compromise quality.
          </p>
          <div>
            <button className='px-6 py-3 bg-green-600 text-white rounded-lg focus:outline-none hover:bg-green-700'>
              Order Now
            </button>
          </div>
        </div>
        <div className='w-full md:w-auto'>
          <img src={img1} alt='Groceries' className='w-full h-auto max-w-sm md:max-w-5xl object-cover rounded-lg mx-auto md:mx-0'/>
        </div>
      </div>
    </div>
  );
};
