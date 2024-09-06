import React from 'react';

export const Categories = () => {
  return (
    <div className='mt-16 py-16'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-semibold mb-8'>
          Top <span className='text-green-600'>Categories</span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-6'>
          {/* Fresh Veggies */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://media.istockphoto.com/id/512907694/photo/collection-vegetables.jpg?s=612x612&w=0&k=20&c=LGPsT8tp72qkDNwRbA6kr75w1JgzoNl8uklz4B5BxJs=' alt='Fresh Veggies' />
              <h4 className='font-semibold text-gray-800'>Fresh Veggies</h4>
            </div>
          </div>

          {/* Fruits */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://i.pinimg.com/736x/e6/f0/d4/e6f0d4cfa8dd565d8b7877051f194157.jpg' alt='Fruits' />
              <h4 className='font-semibold text-gray-800'>Fruits</h4>
            </div>
          </div>

          {/* Dairy Products */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://img.freepik.com/premium-photo/different-fresh-dairy-products-isolated-white-background_185193-28131.jpg' alt='Dairy Products' />
              <h4 className='font-semibold text-gray-800'>Dairy Products</h4>
            </div>
          </div>

          {/* Meat & Poultry */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://img.freepik.com/premium-photo/lean-meats-poultry-whole-grains-seeds-nuts-white-background_1023984-1150.jpg' alt='Meat & Poultry' />
              <h4 className='font-semibold text-gray-800'>Meat & Poultry</h4>
            </div>
          </div>

          {/* Bakery */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://www.shutterstock.com/image-photo/loaves-different-bread-wheat-ears-600nw-2272032001.jpg' alt='Bakery' />
              <h4 className='font-semibold text-gray-800'>Bakery</h4>
            </div>
          </div>

          {/* Beverages */}
          <div className='w-full h-40 shadow-lg rounded-md transition-transform transform hover:scale-105'>
            <div className='flex flex-col items-center justify-center p-4 space-y-2'>
              <img className='w-24 h-24 object-cover' src='https://www.shutterstock.com/image-photo/glasses-cola-orange-soda-drink-600nw-1388932460.jpg' alt='Beverages' />
              <h4 className='font-semibold text-gray-800'>Beverages</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
