'use client'

import Image from 'next/image';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


function SingleProduct() {
  const product = {
    mainImage: '/graySofa.png',
    smallImages: [
      '/blacksofaset.png',
      '/cloudsofa.png',
      '/sofa3.png',
      '/sofa4.png',
    ],
    
    title: 'Asgaard sofa',
    brand: 'BRAND NAME',
    price: 'Rs. 250,000.00',
    description: 'This gray sofa is a perfect blend of style and comfort, made with high-quality materials.',
    reviews: [
      { rating: 5, text: 'Great sofa!' },
      { rating: 4, text: 'Very comfortable.' },
    ],
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-10 py-5 bg-gray-100">
      {/* Product Details Section */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-28 py-20 mx-auto">
          <div className="lg:w-4/5 w-full mx-auto flex flex-col md:flex-row">
            {/* Small Product Images */}
            <div className="lg:w-[20%] md:w-1/4 flex flex-wrap md:flex-col gap-2 md:pr-8 mb-4">
              {product.smallImages.map((src, index) => (
                <div key={index} className="w-1/2 md:w-full h-24 md:h-32 relative rounded overflow-hidden">
                  <Image
                    src={src}
                    alt={`Small image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded" />
                </div>
              ))}
            </div>

            {/* Main Product Image */}
            <div className="w-full md:w-3/4 relative h-64 md:h-96 rounded overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded" />
            </div>
          </div>

          {/* Product Description */}
          <div className="lg:w-4/5 mx-auto mt-8">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.85 1.416 8.336L12 18.754l-7.416 5.182L6 15.6 0 9.75l8.332-1.734z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.85 1.416 8.336L12 18.754l-7.416 5.182L6 15.6 0 9.75l8.332-1.734z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.85 1.416 8.336L12 18.754l-7.416 5.182L6 15.6 0 9.75l8.332-1.734z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.85 1.416 8.336L12 18.754l-7.416 5.182L6 15.6 0 9.75l8.332-1.734z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.429L24 9.75l-6 5.85 1.416 8.336L12 18.754l-7.416 5.182L6 15.6 0 9.75l8.332-1.734z" />
                  </svg>
                  {/* Additional stars */}
                </span>
                <span className="text-gray-600 ml-3">5 Reviews</span>
              </div>

              <p className="leading-relaxed my-4">
                {product.description}
              </p>

              {/* Size Buttons */}
              <div className="mb-4">
                <span className="mr-3">Size</span>
                <button className="border-2 border-gray-300 hover:bg-yellow-100 rounded px-3 py-1 focus:outline-none">S</button>
                <button className="border-2 border-gray-300 hover:bg-yellow-100 rounded px-3 py-1 focus:outline-none ml-2">M</button>
                <button className="border-2 border-gray-300 hover:bg-yellow-100 rounded px-3 py-1 focus:outline-none ml-2">L</button>
              </div>

              {/* Color Buttons */}
              <div className="flex items-center border-b-2 border-gray-200 mb-6 pb-5">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <span className="text-2xl font-bold mb-8">Rs. 250,000.00</span>

              {/* Quantity Selection and Add to Cart */}
              <div className="flex items-center mb-4">
                <span className="mr-3">Quantity</span>
                <button onClick={decreaseQuantity} className="border-2 border-gray-300 rounded hover:bg-yellow-100 px-1 py-0 focus:outline-none">-</button>
                <span className="mx-2">{quantity}</span>
                <button onClick={increaseQuantity} className="border-2 border-gray-300 rounded hover:bg-yellow-100 px-1 py-0 focus:outline-none">+</button>
                </div>
                <div>
                <button className="ml-4 mb-8 bg-yellow-100 text-black px-5 py-0 rounded hover:bg-yellow-600">Add to Cart</button>
              </div>

             
              <div className="mb-2">SKU: SS001</div>
              
              <div className="mb-2">Category: Sofas</div>
              
              <div className="mb-2">Tags: Sofa, Chair, Home, Shop</div>
              
              <div className="flex items-center">
                <span className="mr-2">Share:</span>
                <a href="#" className="text-gray-800 hover:text-blue-600 mr-2">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-800 hover:text-blue-600 mr-2">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-800 hover:text-blue-600">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
