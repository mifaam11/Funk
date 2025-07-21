'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const productsMenuRef = useRef(null);

  // Close search dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close products dropdown when mouse leaves
  useEffect(() => {
    const handleMouseLeave = () => {
      setProductSubmenuOpen(false);
    };

    const menu = productsMenuRef.current;
    if (menu) {
      menu.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        menu.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Toggle search dropdown visibility
  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  // Close all menus when clicking outside on mobile
  const closeAllMenus = () => {
    setMenuOpen(false);
    setProductSubmenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* Responsive padding: px-4 on mobile, px-6 on tablet, px-20 on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
        {/* Mobile: Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <Link href="/" className="text-xl font-bold text-black">
            Funk
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 w-full justify-center">
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="font-semibold text-black">Home</Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              ref={productsMenuRef}
              onMouseEnter={() => setProductSubmenuOpen(true)}
            >
              <Link
                href="#"
                className="hover:text-black flex items-center gap-1 font-medium text-gray-600"
              >
                Products ▼
              </Link>

              {/* Dropdown menu */}
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-200 z-50 ${productSubmenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <ul className="py-1">
                  <li>
                    <Link href="/products/pants" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Pants
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/shirts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/t-shirts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/lower" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Lower
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/products" className="hover:text-black">New arrivals</Link>
            <Link href="/contact-us" className="hover:text-black">Contact us</Link>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="relative flex items-center gap-5 text-gray-600" ref={searchRef}>
          {/* Search icon + dropdown */}
          <div className="relative">
            <CiSearch
              size={20}
              className="cursor-pointer hover:text-black transition-colors duration-200"
              onClick={handleSearchToggle}
            />
          </div>

          {/* Search dropdown with animation */}
          <div className={`fixed inset-x-0 top-[56px] bg-white/80 backdrop-blur-sm z-40 overflow-hidden transition-all duration-300 ease-out ${searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 text-lg px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black bg-transparent"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-gray-500 hover:text-black transition-colors duration-200"
                aria-label="Close search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <Link href="/cart" className="hover:text-black transition-colors duration-200"><FiShoppingCart size={18} /></Link>
          <Link href="/login" className="hover:text-black transition-colors duration-200"><FiUser size={18} /></Link>
        </div>
      </div>

      {/* Mobile Menu System */}
      <div className="md:hidden">
        {/* Main Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <Link href="/" className="text-xl font-bold text-black">
              Funk
            </Link>
            <button onClick={closeAllMenus} className="text-gray-600">
              <FiX size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium text-lg">
            <Link href="/" onClick={closeAllMenus}>Home</Link>
            <button
              onClick={() => setProductSubmenuOpen(true)}
              className="flex justify-between items-center text-left"
            >
              <span className="text-black">Products</span>
              <span>→</span>
            </button>
            <Link href="/products" onClick={closeAllMenus}>New Arrivals</Link>
            <Link href="/contact-us" onClick={closeAllMenus}>Contact Us</Link>
          </nav>
        </div>

        {/* Products Submenu */}
        <div
          className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${productSubmenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200">
            <button
              onClick={() => setProductSubmenuOpen(false)}
              className="text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold">Products</h2>
          </div>

          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 text-base">
            <Link
              href="/products/pants"
              onClick={closeAllMenus}
              className="py-2 border-b border-gray-100"
            >
              Pants
            </Link>
            <Link
              href="/products/shirts"
              onClick={closeAllMenus}
              className="py-2 border-b border-gray-100"
            >
              Shirts
            </Link>
            <Link
              href="/products/t-shirts"
              onClick={closeAllMenus}
              className="py-2 border-b border-gray-100"
            >
              T-Shirts
            </Link>
            <Link
              href="/products/lower"
              onClick={closeAllMenus}
              className="py-2 border-b border-gray-100"
            >
              Lower
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}