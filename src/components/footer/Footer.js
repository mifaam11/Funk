import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1F2B31] text-white py-10 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">FunK</h1>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Step into a world where innovation meets trendsetting, and discover
            a curated collection that redefines contemporary fashion.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.325 1.325 1.325h11.48v-9.294h-3.123v-3.622h3.123v-2.672c0-3.1 1.891-4.788 4.652-4.788 1.325 0 2.466.099 2.795.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.313h3.589l-.467 3.622h-3.123v9.294h6.117c.729 0 1.325-.596 1.325-1.325v-21.351c0-.729-.596-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22.23 5.924c-.808.359-1.675.601-2.585.711 1.012-.606 1.631-1.566 1.969-2.709-.947.562-1.995.965-3.112 1.184-.897-.959-2.178-1.559-3.594-1.559-2.719 0-4.92 2.201-4.92 4.92 0 .385.043.76.126 1.121-4.087-.205-7.713-2.164-10.141-5.144-.424.725-.666 1.561-.666 2.449 0 1.689.86 3.176 2.168 4.048-.797-.026-1.548-.245-2.203-.613v.062c0 2.361 1.679 4.331 3.907 4.774-.409.112-.84.172-1.285.172-.313 0-.616-.03-.914-.086.617 1.931 2.406 3.336 4.526 3.375-1.659 1.301-3.757 2.078-6.032 2.078-.392 0-.779-.023-1.161-.067 2.149 1.379 4.705 2.182 7.44 2.182 8.91 0 13.785-7.379 13.785-13.785 0-.21-.004-.42-.014-.63.947-.684 1.767-1.53 2.415-2.496z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c-5.485 0-9.842 4.357-9.842 9.842 0 4.098 2.643 7.577 6.237 9.088-.087-.775-.166-1.968.035-2.815.185-.784 1.195-5.255 1.195-5.255s-.305-.61-.305-1.51c0-1.414.82-2.47 1.844-2.47.869 0 1.289.653 1.289 1.44 0 .88-.558 2.193-.845 3.42-.241 1.011.51 1.837 1.51 1.837 1.812 0 3.202-2.032 3.202-4.957 0-2.589-1.859-4.393-4.525-4.393-3.086 0-4.89 2.317-4.89 4.708 0 .933.378 1.935.85 2.48.095.1.108.19.08.294-.08.346-.262 1.094-.297 1.245-.06.26-.2.317-.46.19-1.713-.793-2.786-3.287-2.786-5.285 0-3.717 2.637-7.117 7.603-7.117 3.986 0 7.092 2.837 7.092 6.633 0 3.977-2.5 7.184-5.97 7.184-.993 0-1.926-.508-2.25-1.076l-.613 2.332c-.222.855-.822 1.926-1.215 2.574.912.275 1.88.426 2.882.426 5.485 0 9.842-4.357 9.842-9.842 0-5.485-4.357-9.842-9.842-9.842z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h2 className="font-bold mb-4 text-lg">For Renters</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">How it works</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Our fleet</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">FAQ's</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Locations</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h2 className="font-bold mb-4 text-lg">Resources</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Media & Blog</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Partners</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Cookies policy</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Legal information</a></li>
            <li><a href="#" className="hover:text-gray-400 transition-colors text-sm md:text-base">Help center</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="font-bold mb-4 text-lg">Contact Us</h2>
          <div className="space-y-1 text-sm md:text-base">
            <p className="text-gray-400">Monday - Sunday</p>
            <p>8:00 AM - 5:00 PM (AST)</p>
            <p className="text-gray-400 mt-2">Hotline</p>
            <p>978-806-3277</p>
            <p className="text-gray-400 mt-2">Email</p>
            <p>drive.astropr@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
        © 2025 AgriCrown LLC. All rights reserved
      </div>
    </footer>
  );
}