"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="flex items-center justify-between bg-black p-4 md:px-12">
    {/* Left Navigation Links */}

    {/* Logo in the center */}
    <div className="text-white font-bold text-xl md:text-2xl">Agri<span className='text-orange-500'>Crown</span></div>
    <nav className="hidden md:flex space-x-8 text-white">
      <Link  href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/products" className="hover:text-gray-300">Products</Link>
      <Link href="/about-us" className="hover:text-gray-300">Blogs</Link>
      <Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link>
      <Link href="about-us" className="hover:text-gray-300">About Us</Link>
    </nav>

    {/* Right Icons */}
    <div className="flex items-center space-x-4">
      {/* Language Dropdown */}
      <div className="flex items-center bg-white text-black px-3 py-1 rounded-full">
      <CiSearch size={24}/>
      </div>
    

 

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>

    {/* Mobile Menu */}
    {menuOpen && (
      <nav className="absolute top-16 left-0 w-full bg-green-800 text-white p-4 flex flex-col space-y-4 md:hidden">
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Vehicles</a>
        <a href="#" className="hover:text-gray-300">Booking</a>
        <a href="#" className="hover:text-gray-300">Contacts</a>
      </nav>
    )}
  </header>
  )
}
