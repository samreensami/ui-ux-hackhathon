import React from 'react';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import Requirements from '../components/Requirements';
import Button from '../components/button';
const Blog = () => {
  return (
    <div>
    <HeroSection/>

     <section className="text-black bg-gray-100 body-font">
        <div className="container mx-auto px-5 py-20">
          <div className="flex flex-col lg:flex-row">
            {/* Blog Column */}
            <div className="lg:w-1/2 pr-6">
              <div className="flex flex-col space-y-4">
                {/* Blog Cards */}
                {[
                  { src: "/blog1.png", title: "Going all-in with millennial design" },
                  { src: "/blog2.png", title: "Exploring new ways of decorating" },
                  { src: "/blog3.png", title: "Modern home in Milan" },
                ].map((blog, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={blog.src} 
                      alt={blog.title}
                      width={500}
                      height={600}
                      className="w-full object-cover"
                    />
                    <div className="p-5">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {blog.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                        microdosing tousled waistcoat.
                      </p>
                      <div className="flex items-center flex-wrap">
                        <a className="text-indigo-500 inline-flex items-center">
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:w-1/3">
  <div className="mb-8">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* Categories */}
  <div className="mb-8">
    <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
    <ul className="space-y-2">
      {["Web Development", "Design", "Technology", "Marketing", "Photography"].map((category, idx) => (
        <li key={idx} className="flex justify-between text-gray-600">
          <span>{category}</span>
          <span>{Math.floor(Math.random() * 20)}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Recent Posts */}
  <div className="mb-8">
    <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h2>
    <ul className="space-y-4">
      {[
        { img: '/blog4.png', title: 'Understanding JavaScript Closures' },
        { img: '/blog5.png', title: 'Design Trends for 2023' },
        { img: '/blog6.png', title: 'Handmade pieces that took time to make' },
        { img: '/blog7.png', title: 'Effective Marketing Strategies' },
        { img: '/blog8.png', title: 'Photography Tips for Beginners' },
      ].map((post, idx) => (
        <li key={idx} className="flex items-center">
          <Image
            src={post.img}
            alt={post.title}
            width={60}
            height={60}
            className="w-16 h-16 object-cover rounded-md mr-4"
          />
          <span className="text-gray-700">{post.title}</span>
        </li>
      ))}
    </ul>
  </div>
</div>
</div>
          <Button/>
          <Requirements/>
        </div>
      </section>
    </div>
  );
};

export default Blog;
