import React from 'react';

const Hero = () => (
  <section className="w-full min-h-[120px] flex items-center justify-center mt-[70px] animate-fadeIn">
    <div className="glass text-center text-gray-900 animate-slideDown px-8 py-10 shadow-2xl">
      <h1 className="text-5xl mb-3 tracking-wide font-extrabold text-cyan-500 drop-shadow-lg">Discover the Weather</h1>
      <p className="text-lg opacity-95 font-medium text-blue-900">Get real-time weather updates for any city in the world. Stay prepared, wherever you are!</p>
    </div>
  </section>
);

export default Hero;