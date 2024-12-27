import React from 'react'
import Requirements from '../components/Requirements'
import HeroSection from '../components/HeroSection'
const myaccount = () => {
  return (
  <div>
    <HeroSection/>
       
     

        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 space-y-2 lg:space-y-0 lg:space-x-2">
          {/* Login Section */}
          <div className="w-full max-w-md p-0 rounded-md">
            <h2 className="text-2xl font-bold text-center text-gray-700">Log In</h2>
            <form className="mt-10">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm mb-4 font-medium text-gray-600">
                  Username or email address
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username or email"
                  className="w-full px-3 py-2 border rounded-md focus:ring-yellow-100 focus:border-yellow-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 mt-2 mb-4 border rounded-md focus:ring-yellow-100 focus:border-yellow-700"
                />
              </div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="w-4 h-4 text-indigo-5 rounded focus:ring-yellow-100"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mb-6 mt-8 text-black bg-yellow-100 rounded-md hover:bg-yellow-700"
              >
                Log In
              </button>
            </form>
            <p className="mt-0 mb-6 text-sm text-center text-gray-600">
              Lost your password?{' '}
              <a href="/reset" className="text-indigo-500 hover:underline">
                Click here
              </a>
            </p>
          </div>
    
          {/* Register Section */}
          <div className="w-full max-w-md p-6 rounded-md">
            <h2 className="text-2xl font-bold text-center  mb-2 text-gray-700">Register</h2>
            <form className="mt-24">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm -mt-6 font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 mt-6 mb-6 border rounded-md focus:ring-yellow-100 focus:border-yellow-700"
                />
              </div>
              <p className="mt-4 mb-12 text-sm text-gray-600">
                A link to set a new password will be sent to your email address. <br />
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <b>privacy policy</b>.
              </p>
              <button
                type="submit"
                className="w-full px-4 py-2 text-black bg-yellow-100 rounded-md hover:bg-yellow-700"
              >
                Register
              </button>
            </form>
          </div>
        </div>
     <Requirements/>

    </div>
  )
}

export default myaccount
