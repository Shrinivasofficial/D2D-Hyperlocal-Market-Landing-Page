import React from 'react';

export const Shop = () => {
  return (
    <div className='mt-16 px-6 md:px-16'>
      <h1 className='text-4xl font-bold text-center md:text-left'>You Might Need</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
        
        {/* Milk Bread */}
        <div className='w-full shadow-lg rounded-md border border-gray-200 overflow-hidden'>
          <img 
            src='https://images.jdmagicbox.com/quickquotes/images_main/sandwich-bread-for-bakery-white-and-brown-2221719734-etj7ijuu.png' 
            alt='Milk Bread' 
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold'>Milk Bread</h2>
            <p className='text-md text-gray-500'>Baker's House</p>
            <div className='mt-2 px-3 py-1 bg-green-200 text-green-700 rounded-full inline-block text-sm'>
              In Stock
            </div>
            <div className='flex justify-between items-center mt-4'>
              <h3 className='font-semibold text-2xl'>₹ 35.00</h3>
              <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Potato Chips */}
        <div className='w-full shadow-lg rounded-md border border-gray-200 overflow-hidden'>
          <img 
            src='https://t4.ftcdn.net/jpg/02/62/16/87/360_F_262168745_pnQIE61ksyhB4OBwf3TQudltNzVzAR7q.jpg' 
            alt='Potato Chips' 
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold'>Potato Chips</h2>
            <p className='text-md text-gray-500'>Baker's House</p>
            <div className='mt-2 px-3 py-1 bg-green-200 text-green-700 rounded-full inline-block text-sm'>
              In Stock
            </div>
            <div className='flex justify-between items-center mt-4'>
              <h3 className='font-semibold text-2xl'>₹ 30.00</h3>
              <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Peanut Chikki */}
        <div className='w-full shadow-lg rounded-md border border-gray-200 overflow-hidden'>
          <img 
            src='https://t4.ftcdn.net/jpg/03/45/56/87/360_F_345568701_Tr5T8wzZgwei0hd8MlffMvxh65WCSy5m.jpg' 
            alt='Peanut Chikki' 
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold'>Peanut Chikki</h2>
            <p className='text-md text-gray-500'>Baker's House</p>
            <div className='mt-2 px-3 py-1 bg-green-200 text-green-700 rounded-full inline-block text-sm'>
              In Stock
            </div>
            <div className='flex justify-between items-center mt-4'>
              <h3 className='font-semibold text-2xl'>₹ 25.00</h3>
              <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Milagu Sevu */}
        <div className='w-full shadow-lg rounded-md border border-gray-200 overflow-hidden'>
          <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH0sMGi2N9gDMqxXBM6EqOQ-Plr9yrksb4g&s' 
            alt='Milagu Sevu' 
            className='w-full h-40 object-cover'
          />
          <div className='p-6'>
            <h2 className='text-xl font-semibold'>Milagu Sevu</h2>
            <p className='text-md text-gray-500'>Baker's House</p>
            <div className='mt-2 px-3 py-1 bg-green-200 text-green-700 rounded-full inline-block text-sm'>
              In Stock
            </div>
            <div className='flex justify-between items-center mt-4'>
              <h3 className='font-semibold text-2xl'>₹ 55.00</h3>
              <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
