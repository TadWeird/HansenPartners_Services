import React from 'react'
import Global from '../assets/img/global-orig.png';
import REcorp from '../assets/img/re-comp.png'

export default function Partners() {
  return (
    <container>
        <div className=''>
            <div className="flex flex-col md:flex-row bg-black/90 dark:border-gray-700">
                <div className="flex flex-col items-center justify-center text-center p-6 w-full md:w-2/3 leading-normal">
                    <h5 className="font-dailyregular font-semibold text-REyellow py-4 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                    We're GLOBAL
                    </h5>
                    <p className="font-karlaregular text-zinc-200 px-5 py-2 text-base sm:text-lg md:text-lg lg:text-xl">
                    Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with Leading Real Estate Companies of the World, Luxury Portfolio International, and Who's Who In Luxury Real Estate. We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing. 
                    </p>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/3">
                    <img className="w-full h-full object-contain" src={Global} alt=""/>
                </div>
            </div>
        </div>
        <div class="grid border text-zinc-400 shadow-sm dark:border-gray-700 md:grid-cols-1  bg-white dark:bg-gray-800">
                <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border-b text-zinc-400 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-7xl mx-auto mb-4 text-REyellow dark:text-gray-400">
                            <h5 className="font-dailyregular font-semibold text-REyellow py-4 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
                            Our Partners In Luxury
                            </h5>
                            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Leading Real Estate Companies of The World®, <br/> Luxury Portfolio International <br/>& Who's Who in Luxury Real Estate.</h3>                    
                            <p className="my-4 font-karlaregular text-gray-500">JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries. Lastly, Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.</p>
                    </blockquote>
                </figure>
        </div>
        <div className="relative border-gray-200">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <img className="w-[700px] h-auto object-contain relative mx-auto" src={REcorp} alt=""/>
        </div>


    </container>
    
  )
}
