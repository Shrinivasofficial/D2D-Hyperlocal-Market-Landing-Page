import React from 'react';

export const Features = () => {
  return (
    <div className="mt-16 px-4 md:px-16 flex flex-col md:flex-row justify-between items-start">
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-semibold mt-8 md:mt-16">Supporting Your Local Community</h1>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-semibold text-green-600">Community-first always</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            We're committed to putting your community first. Thousands of families <br className="hidden md:inline" />
            trust us with their everyday needs, from fresh produce to local services.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-semibold text-green-600">Genuine Local Products</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            We source directly from local farmers and vendors to ensure that you get <br className="hidden md:inline" />
            fresh, authentic, and high-quality products that benefit your neighborhood.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-semibold text-green-600">Tailored for You</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            Our hyperlocal platform is designed with you in mind. Get services and <br className="hidden md:inline" />
            products customized to your preferences, with the convenience of shopping <br className="hidden md:inline" />
            close to home.
          </p>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-semibold text-green-600">Empowering Local Businesses</h2>
          <p className="text-sm md:text-base font-regular mt-2 leading-relaxed text-gray-500">
            By shopping with us, you're supporting local entrepreneurs and helping to <br className="hidden md:inline" />
            sustain small businesses in your community.
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-36">
        <img 
          src="https://hips.hearstapps.com/hmg-prod/images/online-buying-and-delivery-concept-royalty-free-image-1675370119.jpg" 
          alt="Hyperlocal market" 
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
