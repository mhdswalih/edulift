import React from 'react';
import logo from '../../assets/Img/WhatsApp_Image_2025-10-28_at_09.48.19_2dbcd54a-removebg-preview-removebg-preview (1).png'

const Navbar: React.FC = () => {
  return (
    <div>
        <nav className="block w-full max-w-5xl px-6 py-2 mx-auto text-white backdrop-blur-md border-2 border-amber-50/30 shadow-lg rounded-3xl lg:px-8 lg:py-2 mt-10">
          <div className="container flex items-center justify-between mx-auto text-slate-800">
            {/* Logo Section - Improved Alignment */}
            <div className="flex items-center">
              <img 
                src={logo}
                alt="EduLift Logo"
                className="h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" 
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-8">
                <li className="flex items-center">
                  <a href="/" className="flex items-center relative group py-2">
                    <span className="text-white font-medium">Home</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="/about" className="flex items-center relative group py-2">
                    <span className="text-white font-medium">About</span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="relative h-10 w-10 flex items-center justify-center rounded-lg text-white transition-all hover:bg-white/10 focus:bg-white/10 active:bg-white/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;