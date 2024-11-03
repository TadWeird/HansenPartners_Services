import React from 'react';
import 'flowbite/dist/flowbite';
import logo from '../assets/img/Jhsereno.png';

function Navibar() {
  return (
    <nav className="bg-black/75 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-4 pr-4" alt="Company Logo" />
      </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-2000 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto p-4" id="navbar-default">
          <ul className="text-sm font-karlaregular font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Meet the Team
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Homes
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Community
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Home Valuation
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Services
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Home Across America
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Testimonials
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="block relative py-2 px-3 text-center text-zinc-200 rounded md:p-0 dark:text-zinc-200 group">Contact Us
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navibar;
