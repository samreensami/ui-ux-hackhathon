
"use client";

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="text-black body-font bg-yellow-100">
        <div className="container mx-auto flex justify-between items-center py-5 px-4">
          {/* Logo or Brand */}
          <div className="text-xl font-bold"><i>FURNITURE</i></div>

          {/* Navbar Links for Large Screens */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/Main" className="hover:text-gray-500">
              Main
            </Link>
            <Link href="/Shop" className="hover:text-gray-500">
              Shop
            </Link>
            <Link href="/Singleproduct" className="hover:text-gray-500">
              Singleproduct
            </Link>
            <Link href="/MyAccount" className="hover:text-gray-500">
              MyAccount
            </Link>
            <Link href="/Checkout" className="hover:text-gray-500">
              Checkout
            </Link>
            <Link href="/Cart" className="hover:text-gray-500">
              Cart
            </Link>
            <Link href="/Contact" className="hover:text-gray-500">
              Contact
            </Link>
            <Link href="/Blog" className="hover:text-gray-500">
              Blog
            </Link>
          </nav>

          {/* Icons (Visible on All Screens) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="cursor-pointer hover:text-gray-400">
              <FaRegUser size={18} />
            </span>
            <span className="cursor-pointer hover:text-gray-400">
              <CiSearch size={25} />
            </span>
            <span className="cursor-pointer hover:text-gray-400">
              <CiHeart size={25} />
            </span>
            <Link href="/Cart">
              <BsCart3 size={20} className="cursor-pointer hover:text-gray-400" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="block md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dropdown Menu for Small Screens */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden bg-yellow-50 w-full py-3 border-t border-gray-200`}
        >
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/Main" className="hover:text-gray-400">
                Main
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-gray-400">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Singleproduct" className="hover:text-gray-400">
                Singleproduct
              </Link>
            </li>
            <li>
              <Link href="/MyAccount" className="hover:text-gray-400">
                MyAccount
              </Link>
            </li>
            <li>
              <Link href="/Checkout" className="hover:text-gray-400">
                Checkout
              </Link>
            </li>
            <li>
              <Link href="/Cart" className="hover:text-gray-400">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
