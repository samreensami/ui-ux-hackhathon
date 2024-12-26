import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      <Image
        src="/ourinstagaram.jpeg" 
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Our Instagram</h1>
        <p className="mb-8 text-lg">
          Follow our store on Instagram
        </p>
        <a href="#" className="px-6 py-3 bg-gray-400 rounded-lg hover:bg-gray-500">
          Follow Us
        </a>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
