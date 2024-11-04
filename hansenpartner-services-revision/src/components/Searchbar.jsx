import React from 'react';
import 'flowbite/dist/flowbite';

function Searchbar() {
    return (
        <form className="w-full px-4 mx-auto sticky top-0 z-10 bg-black/90 backdrop-blur-sm flex justify-center items-center space-x-4 py-2">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-full max-w-screen-xl">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-zinc-200 z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path 
                            stroke="currentColor" // Ensure the color is inherited from text-zinc-200 on SVG
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block w-full pl-10 pr-4 py-2 text-sm text-zinc-500 dark:placeholder-gray-400 bg-black/75 backdrop-blur-sm rounded-full focus:outline-none focus:ring-0"
                    placeholder="Search by Address or Area"
                    required
                />
            </div>
            <button
                type="submit"
                className="font-dailyregular text-zinc-200 hover:text-gray-800 bg-black/75 backdrop-blur-sm hover:bg-zinc-200 font-medium text-sm px-4 py-2 rounded-full flex items-center focus:outline-none focus:ring-0"
            >
                <span className="hidden sm:inline">Book an Appointment</span>
                <svg className="w-4 h-4 ml-1 sm:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </form>
    );
}

export default Searchbar;
