'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  const pathname = usePathname();
  const hideOnRoutes = ['/login', '/signup'];
  if (hideOnRoutes.includes(pathname)) return null;
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Funk</span>
              <span className="ml-2 text-white">.</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trendy fashion, timeless comfort. Shop your vibe with Funk! We bring you the latest styles with premium quality.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/products" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Shop</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="/contact-us" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
              <li><Link href="/login" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Login</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Customer Service</h3>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">FAQs</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Shipping Policy</Link></li>
              <li><Link href="/returns" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Return Policy</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Funk. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}