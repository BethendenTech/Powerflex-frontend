"use client"; // This is a client component

import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800 m-auto md:m-0 sm:m-auto">
          <Image
            src="/images/logo-blue.png"
            alt="powerflex logo"
            width={100}
            height={100}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          <a href="#" className="btn self-center w-full text-white flex items-center justify-center text-xl sm:text-base px-4 sm:px-5">Get a Quote</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="#414141" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          <a href="#" className="block px-4 py-2 bg-blue-500 text-white hover:bg-green-600">Get a Quote</a>
        </div>
      )}
    </header>
  );
};

export default Header;
