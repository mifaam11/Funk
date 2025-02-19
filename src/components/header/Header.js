"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position (for home page transparency)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditions for header styling
  const isHomePage = pathname === "/";
  const headerPosition = isHomePage ? "absolute" : "relative";
  const headerBg = isHomePage
    ? isScrolled
      ? "bg-black shadow-md"
      : "bg-transparent"
    : "bg-[#1F2B31]";

  return (
    <>
      {/* Header */}
      <header className={`${headerPosition} top-0 left-0 z-20 w-full flex items-center justify-between ${headerBg} p-4 md:px-12 transition-all duration-300`}>
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="text-white font-bold text-xl md:text-2xl">
            Agri<span className="text-orange-500">Crown</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-white">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/products" className="hover:text-gray-300">Products</Link>
            <Link href="/blogs" className="hover:text-gray-300">Blogs</Link>
            <Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link>
            <Link href="/about-us" className="hover:text-gray-300">About Us</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white text-black px-3 py-1 rounded-full">
              <CiSearch size={24} />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden z-30" onClick={() => setMenuOpen(!menuOpen)}>
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

          {/* Full-Screen Mobile Menu */}
          <div className={`fixed inset-0 bg-[#1F2B31] text-white flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <nav className="flex flex-col space-y-6 text-2xl">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
              <Link href="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              <Link href="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Push content down on other pages */}
      {/* {!isHomePage && <div className="pt-16"></div>} */}
    </>
  );
}
