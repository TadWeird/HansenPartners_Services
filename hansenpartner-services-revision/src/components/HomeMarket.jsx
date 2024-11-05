import React from 'react';
import company1 from '../assets/img/companies.png';

export default function HomeMarket() {
    return (
        <container>
            <div className="bg-black/90 relative">
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                <h1 className="font-dailyregular text-REyellow pt-20 px-2 flex items-center justify-center relative sm:text-4xl text-2xl">We Market Your Home to The World</h1>
                <h1 className="font-karlaregular font-bold text-zinc-200 pt-2 px-2 relative text-center sm:text-md text-2xl">Our Online Marketing Strategy</h1>
                <h1 className="font-karlaregular text-zinc-200 pt-2 pb-20 px-2 relative text-center sm:text-md">​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.</h1>
            </div>
            <div className="grid border text-zinc-400  shadow-sm dark:border-gray-700 md:grid-cols-3 bg-white dark:bg-gray-800">
                
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200  md: dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-REyellow dark:text-gray-400">
                        <div className="flex justify-center mb-4">
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">Local Exposure</h3>
                        <p className="my-4 font-karlaregular text-gray-500">Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.</p>
                    </blockquote>
                </figure>

                
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200  md: dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-REyellow dark:text-gray-400">
                        <div className="flex justify-center mb-4">
                            
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white font-dailyregular">National Exposure</h3>
                        <p className="my-4 font-karlaregular text-gray-500">We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.</p>
                    </blockquote>
                </figure>

                
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border border-gray-200  md: dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-REyellow dark:text-gray-400 font-dailyregular">
                        <div className="flex justify-center mb-4">
                            
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">International Exposure</h3>
                        <p className="my-4 font-karlaregular text-gray-500">To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, 
                        China.apr.com, Caimeiju, Juwai, Country Life UK</p>
                    </blockquote>
                </figure>
            </div>
            <div className=" relative border-gray-200">
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <img className="w-full max-w-sm h-24 object-contain relative mx-auto" src={company1} alt=""/>
            </div>

        </container>
    );
}
