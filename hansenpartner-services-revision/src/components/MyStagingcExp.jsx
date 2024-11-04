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
      <div class="grid border text-zinc-400 rounded-lg shadow-sm dark:border-gray-700 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b text-zinc-400 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-REyellow lg:mb-8 dark:text-gray-400">
                    <div className="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
                    </svg>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-24">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg> */}

                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Decor Guidance</h3>
                    <p className="my-4 font-karlaregular text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b text-zinc-400 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-REyellow dark:text-gray-400">
                    <div className="flex justify-center mb-4"> {/* Added a flex container to center the SVG */}
                      <svg
                        className='size-24' 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="#a29648"><g id="SVGRepo_bgCarrier" 
                        stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"></g><g 
                        id="SVGRepo_iconCarrier"><path 
                        d="M2 2v18h3v-1H3v-6h3V9h5V8H6V3h15v5h-6v1h6v5h-4v1h4v6H11v-7h-1v5H8v1h2v2h12V2zm3 4H3V5h2zm-2 6v-1h2v1zm2-2H3V9h2zM3 8V7h2v1zm2-4H3V3h2z">
                        </path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Intentional ​​​​​​​Layout</h3>
                    <p class="my-4 font-karlaregular text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </blockquote>
            </figure>
        </div>
    </div>
  )
}
