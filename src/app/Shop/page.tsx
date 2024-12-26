import Image from 'next/image';
import React from 'react';
import HeroSection from '../components/HeroSection';
import FilterSection from '../components/FilterSection';
import Button from '../components/button';
import Requirements from '../components/Requirements';



const Shop = () => {
  return (
    <div>
     <HeroSection/>
     <FilterSection/>
   
    <div>
      <section className="container mx-auto py-8 bg-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-black font-bold">Related Products For You</h1>
          <p className="mt-2 text-gray-600">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-3 gap-4 text-black">
          {[
            { src: '/g1.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
            { src: '/g2.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
            { src: '/g11.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
            { src: '/g4.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
            { src: '/g5.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
            { src: '/sofa.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
            { src: '/g9.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
            { src: '/g10.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
            { src: '/graycoversofa.png', title: 'Trenton modular sofa_3', price: 'Rs. 25,000.00' },
            { src: '/g12.png', title: 'Granite dining table with dining chair', price: 'Rs. 25,000.00' },
            { src: '/g15.png', title: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
            { src: '/g14.png', title: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
          ].map((item, index) => (
            <div key={index} className="p-4">
              <div className="relative h-48 w-full rounded overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-sm text-gray-900">{item.title}</h2>
                <p className="mt-1 text-sm">{item.price}</p>
              </div>
              <div className="flex justify-center mt-10 pb-3">
                <button className="inline-flex text-slate-800 bg-gray-100 border-0 py-2 px-3 focus:outline-4 hover:bg-gray-300 text-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
       
        <Button/>
      </section>
    </div>
    <Requirements/>
    </div>
  
     
    
  )
}
export default Shop













