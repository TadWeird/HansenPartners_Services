import React from 'react';
import Page1 from '../assets/img/33years.png';
import Page2 from '../assets/img/marketingstrategy.png';
import Page3 from '../assets/img/hansentablet.png';

export default function() {
  return (
    <container>
    <div>
      <div className="flex flex-col md:flex-row bg-black/90 border dark:border-gray-700">
        <div className="flex flex-col items-center justify-center text-center p-6 w-full md:w-2/3 leading-normal">
          <h5 className="font-dailyregular font-semibold text-REyellow py-4 sm:text-4xl md:text-4xl lg:text-5xl text-3xl">
            Over 33 Years of Real Estate Success
          </h5>
          <p className="font-karlaregular text-zinc-200 px-5 py-2 sm:text-lg md:text-xl lg:text-xl">
            We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, experience is 100% nonnegotiable. And it’s an experience like no other.
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img className="w-full h-full object-contain" src={Page1} alt=""/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-black/90 border dark:border-gray-700">
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img className="w-full h-full object-contain" src={Page2} alt=""/>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-6 w-full md:w-2/3 leading-normal">
          <h5 className="font-dailyregular font-semibold text-REyellow py-4 sm:text-4xl md:text-4xl lg:text-4xl text-3xl">
            We Want To Create An Unforgettable Experience For You...
          </h5>
          <p className="font-karlaregular text-zinc-200 px-5 py-2 sm:text-lg md:text-xl lg:text-xl">
            We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-black/90 border dark:border-gray-700">
        <div className="flex flex-col items-center justify-center text-center p-6 w-full md:w-2/3 leading-normal">
          <h5 className="font-dailyregular font-semibold text-REyellow py-4 sm:text-4xl md:text-4xl lg:text-4xl text-3xl">
            The Hansen Partners Communications Tablet
          </h5>
          <div className="font-karlaregular text-zinc-200 px-5 py-2 sm:text-lg md:text-xl lg:text-xl">
            <p>We’ve created this tool to communicate with you daily and provide real-time updates on your home, accessible with a click from your tablet. With this tool, you can review and sign documents from anywhere, stay updated on marketing activities, materials, and photos in real time, and meet with us face-to-face via Gotomeeting.com to review weekly progress. You’ll also have a dedicated email and access to our Bomb Bomb video messaging for quick, efficient communication. We believe that transparency is key to guiding you and your family through this process. During uncertain times, it’s reassuring to have someone with a proven track record, anticipating your needs before they arise—because who you work with matters!</p>
        </div>

        </div>
        <div className="flex items-center justify-center w-full md:w-1/3">
          <img className="w-full h-full object-contain" src={Page3} alt=""/>
        </div>
      </div>      
    </div>
    </container>
  );
}
