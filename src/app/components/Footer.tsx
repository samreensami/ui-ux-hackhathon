

import React from 'react'

export default function Footer() {
return (
<footer className="text-gray-600 border-y-4 font-[25%] bg-slate-50">
  <div className="container ml-3 mb-2  font-[20%] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-65 flex-shrink-0 md:mx-0 mx-auto text-left md:text-left">
      <br></br>
      <br></br>
      <p className="mt-2 py-3  font-[20%] text-left text-small text-gray-400">
      400 University Drive Suite 200 Corol Gobles FL33134 USA33134
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3">
          Links
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Shop</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-500 tracking-widest text-sm mb-3">
          Help
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Return</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privicy Policies</a>
          </li>
        
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font pt-8 font-small text-gray-900 tracking-widest text-sm mb-3">
          Newsletters
        </h2>

          {/* Email Input Section */}

          <div className="relative flex-grow w-full">
  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
</div>

 {/* Subscribe Section */}
  <div className="lg:w-[40%] md:w-1/2 w-full  pt-[10%] px-11 text-right  pl-">
    <p className="title-font text-gray-900 tracking-widest text-sm font-semibold   pl-11">
      SUBSCRIBE
    </p>
  </div>
</div>
</div>
</div>
<hr></hr>

<p>2022 Meubel House. All rights reverved</p>



</footer>
)
  }



