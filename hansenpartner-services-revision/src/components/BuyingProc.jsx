import React from 'react'
import Page1 from '../assets/img/homesearch.jpg';
import Page2 from '../assets/img/executivemarketing2.png';
import Page3 from '../assets/img/page3.png';
import Page4 from '../assets/img/page2.png';

export default function SellingProc() {
  return (
    <div className='bg-white pb-20'>
        <div className="bg-black/90 relative">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <h1 className="font-dailyregular text-REyellow py-20 flex items-center justify-center relative sm:text-4xl text-2xl">The Buying Process</h1>
        </div>
        <div className="m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row bg-black/90 border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full md:w-1/3">
                  <img className="w-full h-full object-cover" src={Page3} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 w-full md:w-2/3 leading-normal">
                    <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">
                        <span className='text-5xl'>1.</span> Initial Consultation & Planning
                    </h5>
                    <p className="mb-3 font-karlaregular text-zinc-200">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row-reverse bg-black/90 border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full md:w-1/3">
                  <img className="w-full h-full object-cover" src={Page1} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 w-full md:w-2/3 leading-normal">
                    <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">
                        <span className='text-5xl'>2.</span> Search for a Home & Get Pre-Approved
                    </h5>
                    <p className="mb-3 font-karlaregular text-zinc-200">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row bg-black/90 border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full md:w-1/3">
                  <img className="w-full h-full object-cover" src={Page2} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 w-full md:w-2/3 leading-normal">
                    <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">
                        <span className='text-5xl'>3.</span> Submit an Offer
                    </h5>
                    <p className="mb-3 font-karlaregular text-zinc-200">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row-reverse bg-black/90 border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full md:w-1/3">
                  <img className="w-full h-full object-cover" src={Page4} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 w-full md:w-2/3 leading-normal">
                    <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">
                        <span className='text-5xl'>4.</span> Complete Settlement Process
                    </h5>
                    <p className="mb-3 font-karlaregular text-zinc-200">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
