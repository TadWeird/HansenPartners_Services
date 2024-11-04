import React from 'react';
import 'flowbite/dist/flowbite';
import HeroBG from '../assets/img/serviceBG.png';

function Hero() {
    return (
        <div className="relative bg-cover bg-center h-1/2 w-full" style={{ backgroundImage: `url(${HeroBG})` }}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <h1 className="text-white sm:text-6xl text-4xl font-dailyregular whitespace-break-spaces py-60 flex items-center justify-center relative">Services</h1>
        </div>
    );
}
export default Hero