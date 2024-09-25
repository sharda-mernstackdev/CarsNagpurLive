import React from 'react';

const Home = () => {
  return (
    <section className="relative bg-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80 mt-2 h-[600px]" 
           style={{ backgroundImage: 'url("./src/Img/car.jpeg")' }}>
      </div>
      <div className="relative container mx-auto px-6 py-16 flex flex-col items-center text-center z-10">
        {/* Headline */}
        <h1 className="text-5xl font-bold mb-6">Your all-in-one car universe</h1>
  
        {/* Subtext */}
        <p className="text-xl mb-8">Buy, sell, finance, and more—everything at one place.</p>

        {/* Search Bar */}
        <div className="relative w-full max-w-lg mb-8">
          <input
            type="text"
            placeholder="Search cars by fuel"
            className="w-full py-3 px-4 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
            Buy used car
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">
            Sell car
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full">
            New car
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
