'use client'


import Image from 'next/image'; 


const Shop = ()=> {
  return (
     <div className="container mx-auto px-10 py-5 text-black bg-gray-100">
      
      <div className="flex justify-center gap-20 mb-4">
        <h6 className="text-xl text-gray-700 font-bold">Description</h6>
        <h6 className="text-xl text-gray-400 font-bold">Additional Information</h6>
        <h6 className="text-xl text-gray-400 font-bold">Reviews [5]</h6>
      </div>

      {/* Paragraphs */}
      <div className="mb-4">
        <p className="leading-relaxed mb-4 text-gray-400">
        Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="leading-relaxed text-gray-400">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>

     {/* Images */} <div className="flex flex-col md:flex-row gap-8">
       <div className="w-full md:w-1/2 relative h-64 rounded overflow-hidden">
        <Image src="/Description.png"
         alt="Image 1"
          fill style={{ objectFit: 'cover' }} 
          className="rounded" /> </div>
           <div className="w-full md:w-1/2 relative h-64 rounded overflow-hidden">
            <Image src="/Description2.png" 
     alt="Image 2" 
     fill style={{ objectFit: 'cover' }} 
     className="rounded" /> </div> </div>
     </div>
     );
}

export default Shop;
