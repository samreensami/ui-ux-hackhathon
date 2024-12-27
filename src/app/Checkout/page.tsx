import React from 'react'
import HeroSection from '../components/HeroSection'
import Requirements from '../components/Requirements'
const Checkout = () => {
  return (

<div>
<HeroSection/>


 <div className="min-h-screen mt-0">
      <div className="container mx-auto  bg-gray-100 flex flex-col lg:flex-row lg:space-x-8">
        {/* Billing Details Form */}
        <div className="w-full lg:w-2/4 rounded-md p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Billing Details</h2>
          <form>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mt-4">
              <label htmlFor="company" className="block text-sm font-medium text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Company Name"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Country */}
            <div className="mt-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-600">
                Country
              </label>
              <select
                id="country"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              >
                <option>Select your country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>India</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="mt-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Street Address"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Town/City */}
            <div className="mt-4">
              <label htmlFor="town" className="block text-sm font-medium text-gray-600">
                Town / City
              </label>
              <input
                type="text"
                id="town"
                placeholder="Town or City"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Province */}
            <div className="mt-4">
              <label htmlFor="province" className="block text-sm font-medium text-gray-600">
                Province
              </label>
              <select
                id="province"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              >
                <option>Select your province</option>
                <option>Province 1</option>
                <option>Province 2</option>
                <option>Province 3</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="mt-4">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-600">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                placeholder="ZIP Code"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Email */}
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Phone */}
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              />
            </div>

            {/* Additional Information */}
            <div className="mt-4">
              <label htmlFor="additional" className="block text-sm font-medium text-gray-600">
                Additional Information
              </label>
              <textarea
                id="additional"
                placeholder="Additional Information"
                className="w-full mt-1 px-3 py-1.5 border rounded-md text-sm focus:ring-yellow-100 focus:border-yellow-600"
              ></textarea>
            </div>
          </form>
        </div>

    
    
      {/* Product Summary */}
      <div className="w-full lg:w-1/3 rounded-md p-6">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold text-gray-700">Product</h2>
    <h2 className="text-xl font-bold text-gray-700">Subtotal</h2>
  </div>
  {/* Product Details */}
  <div className="flex justify-between items-center border-b pb-4 mb-4">
    <span className="text-gray-600">Asgaard Sofa</span>
    <span className="font-bold text-gray-600">Rs 250,000.00</span>
  </div>

  {/* Subtotal */}
  <div className="flex justify-between items-center border-b pb-4 mb-4">
    <span className="text-gray-600">Subtotal</span>
    <span className="font-bold text-gray-600">Rs 250,000.00</span>
  </div>

  {/* Total */}
  <div className="flex justify-between items-center border-b pb-4 mb-4">
    <span className="text-gray-600">Total</span>
    <span className="font-bold text-gray-600">Rs 250,000.00</span>
  </div>

  {/* Payment Options */}
  <div className="space-y-4">
    <label className="flex items-start">
      <input
        type="radio"
        name="payment"
        className="w-4 h-4 mt-1 text-yellow-100 focus:ring-yellow-600"
      />
      <span className="ml-2 text-gray-600 text-sm">
        Direct Bank Transfer
        <p className="text-gray-500 text-xs mt-1">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
      </span>
    </label>

    <label className="flex items-start">
      <input
        type="radio"
        name="payment"
        className="w-4 h-4 mt-1 text-yellow-100 focus:ring-yellow-600"
      />
      <span className="ml-2 text-gray-600 text-sm">
        Cash on Delivery
        <p className="text-gray-500 text-xs mt-1">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </p>
      </span>
    </label>
  </div>

  {/* Place Order Button */}
  <button className=" px-1 py-2 mt-6 text-black bg-yellow-100 rounded-md text-sm hover:bg-yellow-600">
    Place Order
  </button>
</div>
</div>
    </div>


   <Requirements/>
 
    </div>
  )
}

export default Checkout
