import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Shop = () => {
  return (
    <div className="flex bg-gray-50 pb-10">
  <div className="w-full h-[400px] relative opacity-70">
    <Image
      alt="shop background"
      src="/shopbg.png"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-2">
        <Image
          src="/shoplogo.png"
          alt="shoplogo"
          width={200}
          height={20}
          className="mx-auto"
        />
        <h1 className="text-4xl text-black font-medium pt-2">SHOP</h1>
        <div className="flex justify-center items-center pt-15">
          <Link href="/home" className="mx-2 text-black underline hover:text-gray-800">
            Home
          </Link>
          <span className="mx-1 text-black">{'>'}</span>
          <Link href="/shop" className="mx-2 text-black underline hover:text-gray-800">
            Shop
          </Link>
        </div>
      </div>                          
    </div>
  </div>


  
  )
}

export default Shop
