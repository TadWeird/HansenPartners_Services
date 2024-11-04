import React from 'react'
import Page1 from '../assets/img/furniture1.jpg';
import Page2 from '../assets/img/layout.jpg';

export default function MyStrategicExp() {
  return (
    <div>
      <div className="bg-black/90 relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <h1 className="font-dailyregular text-REyellow pt-20 px-2 flex items-center justify-center relative sm:text-4xl text-2xl">My Strategic Expertise</h1>
          <h1 className="font-karlaregular text-zinc-200 pt-2 pb-20 px-2 relative text-center sm:text-md">Unclutter and organize your home, neatly arrange drawers and cabinets, keep pets outdoors or off the premises & play soft music.</h1>
          
      </div>
      <div className='m-6 flex flex-col md:flex-row justify-center'>
        <div className="flex flex-col md:flex-row bg-black/90 border border-gray-200 shadow w-full md:w-1/2 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
          <img className="object-cover w-auto h-auto md:h-auto md:w-48" src={Page1} alt="Decor Guidance"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">Decor Guidance</h5>
            <p className="mb-3 font-normal text-zinc-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae, officia at non quidem consequatur molestiae, impedit quod soluta delectus aut officiis explicabo voluptatum dolor? Saepe culpa amet cum beatae.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse bg-black/90 border border-gray-200 shadow w-full md:w-1/2 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
          <img className="object-cover w-auto h-auto md:h-auto md:w-48" src={Page2} alt="Decor Guidance"/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-dailyregular tracking-tight text-zinc-200">Intentional Layout</h5>
            <p className="mb-3 font-normal text-zinc-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae, officia at non quidem consequatur molestiae, impedit quod soluta delectus aut officiis explicabo voluptatum dolor? Saepe culpa amet cum beatae.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
