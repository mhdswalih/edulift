import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div>
        <nav className="block w-full max-w-5xl px-6 py-2 mx-auto text-white  backdrop-blur-md border-2 border-amber-50/30 shadow-lg rounded-3xl lg:px-8 lg:py-2 mt-10">
          <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
            <a href="#"
              className="mr-4 block cursor-pointer py-1 text-lg text-white font-bold tracking-wide hover:text-amber-100 transition-colors">
              EduLift
            </a>
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                <li className="flex items-center p-1 text-sm gap-x-2 text-white">
                  <a href="/" className="flex items-center relative group">
                    <span>Home</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                {/* <li className="flex items-center p-1 text-sm gap-x-2 text-white">
                  <a href="#" className="flex items-center relative group">
                    <span>Account</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li className="flex items-center p-1 text-sm gap-x-2 text-white">
                  <a href="#" className="flex items-center relative group">
                    <span>Blocks</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li> */}
                <li className="flex items-center p-1 text-sm gap-x-2 text-white">
                  <a href="/about" className="flex items-center relative group">
                    <span>About</span>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-100 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="relative ml-auto h-6 max-h-10 w-6 max-w-10 select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-white/10 focus:bg-white/10 active:bg-white/10 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;