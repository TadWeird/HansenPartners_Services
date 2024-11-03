import React from 'react';
import 'flowbite/dist/flowbite';
import HeroBG from '../assets/img/hero-service-bg.png';

function Hero() {
    return (
        <div className="relative bg-cover bg-center h-1/2 w-screen backdrop-blur-sm" style={{ backgroundImage: `url(${HeroBG})` }}>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <h1 className="text-white sm:text-6xl text-4xl font-dailyregular whitespace-break-spaces py-60 flex items-center justify-center relative">Services</h1>
        </div>
    );
}

export default Hero