// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-dailyregular font-semibold mb-4">Julie Hansen Partnership</h3>
          <p className="text-sm font-karlaregular leading-relaxed mb-4">
            An elite group of the East Bay's most talented and visionary real estate professionals believed buyers and
            sellers deserved more from their real estate company. More service. More resources. More integrity. More
            global reach. In a word, more of everything people should expect when they buy or sell their homes.
          </p>
        </div>

        {/* Right Column */}
        <div className="font-karlaregular">
          <h3 className="text-2xl  font-dailyregular font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-2 ">Subscribe to our Newsletter for latest news and updates. Stay tuned!</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <label className="text-xs text-gray-600 flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
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
              className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-600 space-y-4 lg:space-y-0">
        {/* Address and Contact Information */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <div className="text-center lg:text-left">
            <p className="font-semibold">ADDRESS</p>
            <p>4733 Chabot Drive #100</p>
            <p>Pleasanton, CA 94588</p>
            <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
          </div>
          <div className="text-center lg:text-left">
            <p className="font-semibold">CONTACT INFORMATION</p>
            <p>(925) 553-6707</p>
            <p>luxuryhomesinwc@icloud.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
            {/* Placeholder for icon */}
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
            {/* Placeholder for icon */}
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>

      {/* Legal Info */}
      <div className="mt-4 text-center text-xs text-gray-600">
        <p>Website Designed & Developed by <a href="#" className="underline">Luxury Presence</a></p>
        <div className="flex items-center justify-center mt-2 space-x-4">
          {/* Placeholder for Realtor and Equal Housing logos */}
          <span className="text-gray-400">[Realtor Logo]</span>
          <span className="text-gray-400">[Equal Housing Logo]</span>
          <span className="text-gray-400">[Sereno Logo]</span>
        </div>
        <p className="mt-2">&copy; Copyright 2024 | <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
}
