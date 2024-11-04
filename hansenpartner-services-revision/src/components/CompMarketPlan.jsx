import React from 'react';
import { Carousel } from 'flowbite-react';
import Page1 from '../assets/img/page1.jpg';
import Page2 from '../assets/img/page2.png';
import Page3 from '../assets/img/page3.png';

export default function CompMarketPlan() {
  return (
    <div className="relative w-full bg-black/90 rounded-none sm:text-4xl text-4xl">
        <h1 class="font-dailyregular text-REyellow py-20 flex items-center justify-center relative">Comprehensive Marketing Plan</h1>
      <Carousel
        slideInterval={5000}
        indicators={false} // Disable built-in indicators to customize
        leftControl={
          <span className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 group-hover:bg-gray-500 group-focus:ring-2 group-focus:ring-black">
              <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </span>
        }
        rightControl={
          <span className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-200 group-hover:bg-gray-500 group-focus:ring-2 group-focus:ring-black">
              <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </span>
        }
      >
        {/* Carousel items without rounded edges */}
        <div className="relative h-56 overflow-hidden md:h-96">
          <img src={Page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
        </div>
        <div className="relative h-56 overflow-hidden md:h-96">
          <img src={Page2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
        </div>
        <div className="relative h-56 overflow-hidden md:h-96">
          <img src={Page3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
        </div>
      </Carousel>

      {/* Custom Indicators - Commented out as per your request */}
      {/* <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white/70" aria-label="Slide 1" onClick={() => {}}></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/70" aria-label="Slide 2" onClick={() => {}}></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/70" aria-label="Slide 3" onClick={() => {}}></button>
      </div> */}
    </div>

  );
}
