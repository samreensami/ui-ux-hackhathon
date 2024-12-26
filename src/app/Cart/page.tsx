import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import Requirements from '../components/Requirements';

const Cart = () => {
  return (
    <div>
      <HeroSection />

      {/* Cart Section */}
      <div className="container text-black pt-10 mb-0 bg-gray-100 flex flex-col lg:flex-row justify-between">
        {/* Left Section: Cart Items */}
        <div className="w-full lg:w-5/6 h-[350px] bg-gray-100">
          <h2 className="text-2xl font-bold  text-gray-700 mb-6">Shopping Cart</h2>
          <table className="w-full mt-0 border-collapse border">
            <thead>
              <tr className="bg-yellow-50">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Subtotal</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {/* Cart Item 1 */}
              <tr>
                <td className="flex items-center px-4 py-2">
                  <Image
                    src="/Cart.png"
                    alt="product"
                    width={100}
                    height={100}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <span className="text-gray-700">Asgaard sofa</span>
                </td>
                <td className="px-4 py-2">Rs 50,000</td>
                <td className="px-4 py-2">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 rounded text-center"
                  />
                </td>
                <td className="px-4 py-2">Rs 50,000</td>
                <td className="px-4 py-2">
                  <button className="text-red-500 hover:text-red-700">Remove</button>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>

        {/* Right Section: Cart Totals */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Cart Totals</h2>
          <div className="p-4 border rounded-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold">Rs 50,000</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">Total</span>
              <span className="font-bold">Rs 50,000</span>
            </div>
            <button className="w-full px-6 py-2 text-black bg-yellow-100 rounded hover:bg-yellow-600">
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Requirements />
    </div>
  );
};

export default Cart;
