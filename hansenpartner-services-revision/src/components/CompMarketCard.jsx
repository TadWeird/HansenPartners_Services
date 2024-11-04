import React from 'react'

export default function CompMarketCard() {
  return (
        <div class="grid mb-8 border text-zinc-400 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b text-zinc-400 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-REyellow lg:mb-8 dark:text-gray-400">
                    <div className="flex justify-center mb-4"> {/* Added a flex container to center the SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-24 stroke-1">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 
                                2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Responsive</h3>
                    <p className="my-4 font-karlaregular text-gray-500">I am always available via phone, text, or email.</p>
                </blockquote>
                {/* Uncomment this section if you want to include the figcaption */}
                {/* <figcaption className="flex items-center justify-center ">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Bonnie Green</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                    </div>
                </figcaption> */}
            </figure>

            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b text-zinc-400 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-REyellow lg:mb-8 dark:text-gray-400">
                    <div className="flex justify-center mb-4"> {/* Added a flex container to center the SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 stroke-1">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Syndication</h3>
                    <p class="my-4 font-karlaregular text-gray-500">I market your property locally, nationally, and internationally</p>
                </blockquote>
                {/* <figcaption class="flex items-center justify-center ">
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Roberta Casas</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                    </div>
                </figcaption>     */}
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b text-zinc-400 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-REyellow lg:mb-8 dark:text-gray-400 font-dailyregular">
                    <div className="flex justify-center mb-4"> {/* Added a flex container to center the SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 stroke-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Virtual Tour</h3>
                    <p class="my-4 font-karlaregular text-gray-500">Let's make your home stand out with a high quality virtual tour.</p>
                </blockquote>
                {/* <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Jese Leos</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                    </div>
                </figcaption>     */}
            </figure>
            <figure class="flex flex-col items-center justify-center p-8 text-center bg-white text-zinc-400 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote class="max-w-2xl mx-auto mb-4 text-REyellow lg:mb-8 dark:text-gray-400 font-dailyregular">
                    <div className="flex justify-center mb-4"> {/* Added a flex container to center the SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 stroke-1">
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 
                            47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>

                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">Photography</h3>
                    <p class="my-4 font-karlaregular text-gray-500">Beatiful, high-end photography is a central part of our marketing plan for your property.</p>
                </blockquote>
                {/* <figcaption class="flex items-center justify-center ">
                    <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                    <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Joseph McFall</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">CTO at Google</div>
                    </div>
                </figcaption>     */}
            </figure>
        </div>
  )
}
