import React from 'react';

const WeatherResult = ({ city, temp, humidity, min, max, wind, desc }) => (
  <div className="mt-4 px-4 py-7 glass soft-shadow text-gray-800 text-base min-h-[120px] flex flex-col items-center animate-fadeIn">
    <div className="mb-2">
      <div className="w-[54px] h-[54px] rounded-full bg-gradient-radial from-yellow-200 via-yellow-300 to-yellow-400 shadow-[0_0_24px_6px_rgba(255,224,102,0.53)] animate-spin-slow mx-auto" />
    </div>
    <h2 className="my-3 text-xl text-cyan-400 tracking-wide drop-shadow-sm">{city}</h2>
    <p className="text-4xl font-extrabold text-yellow-400 mb-1 tracking-wide animate-popIn drop-shadow-lg">
      {temp}°C
    </p>
    <p className="italic text-gray-500 mb-2">{desc}</p>
    <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-600 mt-2 opacity-85">
      <span>Humidity: {humidity}%</span>
      <span>Wind: {wind} m/s</span>
      <span>Min: {min}°C</span>
      <span>Max: {max}°C</span>
    </div>
  </div>
);

export default WeatherResult;
