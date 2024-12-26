import React from "react";
import Image from "next/image";
import ViewMore from "../components/viewMore";
import Followus from "../components/followus";
import Button from "../components/button";
const Main = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center px-4 md:px-16 text-gray-600 body-font bg-yellow-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 pl-12 pt-12 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Rocket Single
              <br />
              Seater
            </h1>
            <div className="flex justify-center">
              <a className="mx-2 underline hover:text-gray-400" href="/home">
                Shop Now
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <Image
              className="w-full h-auto object-cover"
              alt="hero"
              src="/sofa1.jpg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Section with images */}
      <section className="text-gray-600 body-font bg-[#f5e5e5]">
        <div className="container px-5 py-4 mx-auto">
          <div className="flex flex-wrap -mx-4 text-center">
            {/* First Image Section */}
            <div className="w-full md:w-1/2 mb-8 px-4">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g13.png"
                  width={600}
                  height={400}
                />
              </div>
              <a
                className="text-lg text-gray-700 underline hover:text-gray-500 mt-4 block"
                href="/home"
              >
                Shop Now
              </a>
            </div>

            {/* Second Image Section */}
            <div className="w-full md:w-1/2 mb-8 px-4">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g15.png"
                  width={600}
                  height={400}
                />
              </div>
              <a
                className="text-lg text-gray-700 underline hover:text-gray-500 mt-4 block"
                href="/home"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Third Image Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-800">
              Top Picks for You
            </h1>
            <p className="text-gray-600 mt-2">
              Discover our best collections carefully curated for your taste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="p-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g1.png"
                  width={600}
                  height={400}
                />
              </div>
              <p className="text-gray-800 text-base leading-relaxed mt-2 text-center">
                Trenton modular sofa-3
              </p>
              <h2 className="text-xl font-medium title-font text-gray-700 mt-2 text-center">
                Rs.25,000.00
              </h2>
            </div>

            {/* Image 2 */}
            <div className="p-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g2.png"
                  width={600}
                  height={400}
                />
              </div>
              <p className="text-gray-800 text-base leading-relaxed mt-2 text-center">
                Granite dining table with chair
              </p>
              <h2 className="text-xl font-medium title-font text-gray-700 mt-2 text-center">
                Rs.25,000.00
              </h2>
            </div>

            {/* Image 3 */}
            <div className="p-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g3.png"
                  width={600}
                  height={400}
                />
              </div>
              <p className="text-gray-800 text-base leading-relaxed mt-2 text-center">
                Outdoor bar table and stool
              </p>
              <h2 className="text-xl font-medium title-font text-gray-700 mt-2 text-center">
                Rs.25,000.00
              </h2>
            </div>

            {/* Image 4 */}
            <div className="p-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/g4.png"
                  width={600}
                  height={400}
                />
              </div>
              <p className="text-gray-800 text-base leading-relaxed mt-2 text-center">
                Granite dining table with chair
              </p>
              <h2 className="text-xl font-medium title-font text-gray-700 mt-2 text-center">
                Rs.25,000.00
              </h2>
            </div>
          </div>

          <ViewMore />
        </div>
      </section>

      {/* Next Section */}
      <section className="text-gray-600 body-font overflow-hidden bg-yellow-50">
        <div className="container px-5 py-20 mx-auto">
          <div className=" mx-auto flex flex-wrap">
            <Image src="/graycoversofa.png"
             alt="sofa" 
             width={400} 
             height={300} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-2 lg:mt-0">
              <p className="leading-relaxed text-center">New Arrivals</p>
              <h1 className="text-gray-900 text-3xl title-font font-medium text-center">
                Asgard sofa
              </h1>
              <div className="flex justify-center mt-4 pb-3">
                <button className="inline-flex text-slate-800 bg-gray-100 border-0 py-3 px-8 focus:outline-4 hover:bg-gray-300 text-lg">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="container mx-auto py-8 bg-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-3xl text-black font-bold">Our Blogs</h1>
            <p className="mt-2 text-gray-600">
              Find a bright ideal to suit your taste with our great selection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-3 gap-4 text-black">
            {[
              {
                src: "/blog2.png",
                title: "Going all-in with millennial design",
                price: "Rs. 25,000.00",
              },
              {
                src: "/blog3.png",
                title: "Going all-in with millennial design",
                price: "Rs. 25,000.00",
              },
              {
                src: "/blog9.jpeg",
                title: "Going all-in with millennial design",
                price: "Rs. 25,000.00",
              },
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
                  <button className="inline-flex text-slate-800 bg-gray-100 border-0 py-3 px-8 focus:outline-4 hover:bg-gray-300 text-lg">
                    Read More
                  </button>
                </div>
                <div>
                    </div>
                  <div>
                </div>
                </div>
              ))}
            </div>
          <Button/>
        </section>
       <Followus/>
      </div>
    </div>
  );
};

export default Main;
