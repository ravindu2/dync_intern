import React from 'react';
import img1 from '../assets/minator-logo.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#191B37] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        
        <div className="mb-8">
          <img 
            src={img1}
            alt="Minator Logo" 
            className="mx-auto w-42 h-42"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 sm:space-y-0 sm:space-x-8 sm:flex-row">
          <button className="bg-[#B7BBFF] text-[#191B37] px-12 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200">
            Sign In
          </button>
          <button className="bg-[#B7BBFF] text-[#191B37] px-12 py-2 rounded-md font-semibold hover:opacity-90 transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;