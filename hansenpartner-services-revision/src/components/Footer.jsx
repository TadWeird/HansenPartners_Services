import React from "react";
import JHsereno from '../assets/img/Jhsereno-dark.png'
import EqualLogo from '../assets/img/equalhousing.png'
import RealtorLogo from '../assets/img/realtorlogo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen mx-auto grid gap-8 md:grid-cols-3">
        
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-dailyregular font-semibold mb-4">Julie Hansen Partnership</h3>
          <p className="text-sm font-karlaregular leading-relaxed mb-4">
            An elite group of the East Bay's most talented and visionary real estate professionals believed buyers and
            sellers deserved more from their real estate company. More service. More resources. More integrity. More
            global reach. In a word, more of everything people should expect when they buy or sell their homes.
          </p>
        </div>

        {/* Middle Column */}
        <div className="font-karlaregular">
          <h3 className="text-2xl font-dailyregular font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-2">Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <label className="text-xs text-black flex items-start space-x-2">
              <input type="checkbox" className="mt-1 outline-none" />
              <span>
                By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{" "}
                and consent to receiving marketing communications, including through automated calls, texts, and emails,
                some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any
                products or services and you may opt out at any time. To opt out from texts, you can reply, 'stop' at
                any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data
                rates may apply.
              </span>
            </label>
            <button
              type="submit"
              className="bg-black/90 text-white py-2 px-4 hover:bg-gray-600 transition-colors rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Column - Work With Us Section */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold font-dailyregular">Work With Us</h3>
          <p className="text-sm font-karlaregular leading-relaxed">
            With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams
            are a reality. Let us guide you through your home buying journey, contact us today!
          </p>
          <button
            type="button"
            className="border border-black text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col lg:flex-row items-center justify-between text-sm text-zinc-500 space-y-4 lg:space-y-0">
        {/* Address and Contact Information */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <div className="text-center lg:text-left">
            <p className="font-karlaregular text-black/90 font-bold">ADDRESS</p>
            <p className="font-karlaregular">4733 Chabot Drive #100</p>
            <p className="font-karlaregular">Pleasanton, CA 94588</p>
            <p className="font-karlaregular">Julie Hansen-Orvis | CA DRE# 00934447</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-karlaregular text-black/90 font-bold">CONTACT INFORMATION</p>
            <p className="font-karlaregular">(925) 553-6707</p>
            <p className="font-karlaregular">luxuryhomesinwc@icloud.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 rounded-full bg-black/90 hover:bg-gray-700">
            <span className="sr-only">Facebook</span>
            <svg fill="#e4e4e7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"/>
            </svg>
          </a>
          <a href="#" className="p-2 rounded-full bg-black/90 hover:bg-gray-700">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6 fill-[#e4e4e7]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>

        </div>
      </div>

      {/* Legal Info */}
      <div className="mt-4 text-center text-xs text-black font-karlaregular">
        <p>
            Website Designed & Developed by <a href="#" className="underline">Luxury Presence</a>
        </p>
        
        <div className="flex justify-center mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            {/* Realtor, Equal Housing, and JH Sereno logos */}
            <img className="w-8 h-8 object-contain mx-auto" src={RealtorLogo} alt="Realtor Logo" />
            <img className="w-8 h-8 object-contain mx-auto" src={EqualLogo} alt="Equal Housing Logo" />
            <img className="w-auto h-6 object-contain mx-auto" src={JHsereno} alt="JH Sereno Logo" />
            </div>
        </div>
        
        <p className="mt-2">
            &copy; Copyright 2024 | <a href="#" className="underline">Privacy Policy</a>
        </p>
      </div>


    </footer>
  );
}
