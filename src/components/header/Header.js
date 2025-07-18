'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiSearch } from 'react-icons/ci';
import { FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const productsMenuRef = useRef(null);
  const pathname = usePathname();

  const hideOnRoutes = ['/login', '/signup'];
  if (hideOnRoutes.includes(pathname)) return null;

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

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setProductSubmenuOpen(false);
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
      <header className=" fixed top-0 left-0 w-full bg-white shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
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
              <div
                className="relative group"
                ref={productsMenuRef}
                onMouseEnter={() => setProductSubmenuOpen(true)}
              >
                <Link href="#" className="hover:text-black flex items-center gap-1 font-medium text-gray-600">
                  Products ▼
                </Link>
                <div className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-200 z-50 ${productSubmenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <ul className="py-1">
                    {['pants', 'shirts', 't-shirts', 'lower'].map((item) => (
                      <li key={item}>
                        <Link href={`/products/${item}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors capitalize">
                          {item.replace('-', ' ')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href="/products" className="hover:text-black">New arrivals</Link>
              <Link href="/contact-us" className="hover:text-black">Contact us</Link>
            </nav>
          </div>

          {/* Right Icons */}
          <div className="relative flex items-center gap-5 text-gray-600" ref={searchRef}>
            <div className="hidden md:block relative">
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
        <div className={`hidden md:block fixed inset-x-0 top-[50px] bg-white/80 backdrop-blur-sm z-40 overflow-hidden transition-all duration-300 ease-out ${searchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 text-lg px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-black bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-gray-500 hover:text-black transition-colors duration-200"
              aria-label="Close search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu and Submenu code remains same */}
        {/* Mobile Search remains same */}
      </header>
    </>
  );
}
