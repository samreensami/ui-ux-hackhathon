import React from 'react'
import Image from 'next/image'

const FilterSection = () => {
  return (
    <div>
      
 {/* Filter Section */}
 <section className="bg-[#f5e5e5] p-6 text-black mt-0">
        <div className="flex justify-between items-center container mx-auto">
          <nav className="flex items-center gap-4">
            <Image src="/slider.png"
             alt="Filter Icon"
             width={32}
             height={32} />
            <span>Filter</span>
            <Image src="/filterlogo.png"
             alt="Icon" 
             width={32} 
             height={32} />
              <Image src="/vector.png"
             alt="Icon" 
             width={32} 
             height={32} />
            <span>Showing 1-16 of 32 results</span>
          </nav>
          <div className="flex items-center gap-4">
          <span>show</span>
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">16</button>
           
            <span>Sort by</span>
            <button className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
              Default
            </button>
          </div>
        </div>
        
      </section>
      </div>
  )
}

export default FilterSection



