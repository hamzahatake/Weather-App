import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-4 mb-7 animate-fadeIn glass soft-shadow px-4 py-3">
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
        required
        className="py-3 px-4 border border-cyan-200 rounded-lg text-base outline-none transition-all w-2/3 shadow-sm bg-white/80 focus:border-cyan-400 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.2)] text-black"
      />
      <button
        type="submit"
        className="py-3 px-6 bg-gradient-to-r from-cyan-400 to-blue-400 border-none rounded-lg text-white text-base cursor-pointer transition-all font-semibold shadow-md hover:from-blue-400 hover:to-cyan-400 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
      >
        Get Weather
      </button>
    </form>
  );
};

export default SearchForm;