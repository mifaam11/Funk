'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  const handleSearchToggle = () => {
    setSearchOpen(true);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      setSearchOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
          {/* Hamburger */}
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 w-full justify-center">
            <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="font-semibold text-black">Home</Link>
              <Link href="/products" className="hover:text-black font-medium">Shop</Link>
              <Link href="/products" className="hover:text-black">New arrivals</Link>
              <Link href="/contact-us" className="hover:text-black">Contact us</Link>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="relative flex items-center gap-5 text-gray-600">
            <div className="hidden md:block relative" ref={searchRef}>
              <CiSearch
                size={20}
                className="cursor-pointer hover:text-black transition-colors duration-200"
                onClick={handleSearchToggle}
              />
            </div>
            <Link href="/cart" className="hover:text-black transition-colors duration-200"><FiShoppingCart size={18} /></Link>
            <Link href="/login" className="hidden md:block hover:text-black transition-colors duration-200"><FiUser size={18} /></Link>
          </div>
        </div>

        {/* Desktop Search */}
        <div ref={searchRef} className={`hidden md:block fixed inset-x-0 top-[50px] bg-white/80 backdrop-blur-sm z-40 overflow-hidden transition-all duration-300 ease-out ${searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 text-lg px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={22} />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-gray-500 hover:text-black transition-colors duration-200"
              aria-label="Close search"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <Link href="/" className="text-xl font-bold text-black">Funk</Link>
                <button onClick={closeAllMenus} className="text-gray-600"><FiX size={24} /></button>
              </div>
              <div className="flex-1">
                <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium text-lg">
                  <Link href="/" onClick={closeAllMenus}>Home</Link>
                  <Link href="/products" onClick={closeAllMenus}>Shop</Link>
                  <Link href="/products" onClick={closeAllMenus}>New Arrivals</Link>
                  <Link href="/contact-us" onClick={closeAllMenus}>Contact Us</Link>
                </nav>
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/login" onClick={closeAllMenus} className="flex items-center gap-2 text-gray-700 font-medium">
                  <FiUser size={18} />
                  <span>Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search - Only on homepage */}
      {pathname === '/' && (
        <div className="md:hidden bg-white border-b border-gray-200 mt-[55px]">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full text-sm px-4 py-2 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <FiX size={18} />
                  </button>
                )}
                <button
                  type="submit"
                  className="text-gray-500 hover:text-black transition-colors"
                  aria-label="Submit search"
                >
                  <CiSearch size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
