import React from 'react';

export const Footer = () => {
  return (
    <div className='mt-16 w-full bg-gray-100 border-t border-gray-300'>
      <div className='container mx-auto mt-8 p-4'>
        <div className='flex flex-col md:flex-row items-start justify-between space-y-12 md:space-y-0 md:space-x-16'>
          
          <div className='flex flex-col items-start'>
            <img src='https://your-logo-url.com/logo.png' alt='' className='h-8 object-cover' />
            <p className='text-gray-500 py-5 text-left'>© 2024, D2D Hyperlocal Market.</p>
            <p className='text-left'>Developed by <a className='font-bold' href='thevivid.io'>Vivid</a>.</p>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Company</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>About Us</p>
              <p className='text-md text-gray-500'>How It Works</p>
              <p className='text-md text-gray-500'>Community Impact</p>
              <p className='text-md text-gray-500'>Careers</p>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Support</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>Contact Us</p>
              <p className='text-md text-gray-500'>Help Center</p>
              <p className='text-md text-gray-500'>Delivery & Returns</p>
              <p className='text-md text-gray-500'>FAQs</p>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Explore</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>Find Local Sellers</p>
              <p className='text-md text-gray-500'>Sustainability</p>
              <p className='text-md text-gray-500'>Become a Seller</p>
              <p className='text-md text-gray-500'>Delivery Zones</p>
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-xl font-regular'>Account</h1>
            <div className='py-4 space-y-2'>
              <p className='text-md text-gray-500'>Sign In</p>
              <p className='text-md text-gray-500'>Create an Account</p>
              <p className='text-md text-gray-500'>Order Tracking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
