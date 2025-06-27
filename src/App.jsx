import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import WeatherResult from './components/WeatherResult';
import Footer from './components/Footer';

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);

  const handleSearch = async (city) => {
    const API_KEY = '20c1582fe73411d2ca816527426cbf8e';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    try {
      setLoading(true);
      setError(null);
      setWeather(null);
      setCityInfo(null);

      const url = `${BASE_URL}?q=${city.trim()}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      const main = data.main;
      const wind = data.wind;
      const weatherDesc = data.weather?.[0]?.description || "";

      setWeather({
        city: data.name,
        temp: main.temp,
        humidity: main.humidity,
        min: main.temp_min,
        max: main.temp_max,
        wind: wind.speed,
        desc: weatherDesc
      });

      setCityInfo("This is a cool city with interesting history!"); // dummy text
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="animated-bg" />
      <Header />
      <Hero />
      <main className="floating-container text-center animate-fadeIn">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <SearchForm onSearch={handleSearch} />
        {weather && <WeatherResult {...weather} />}
        {cityInfo && (
          <section className="mt-7 p-5 rounded-xl bg-white/80 shadow-md animate-fadeIn">
            <h3 className="text-lg font-bold text-cyan-600 mb-2">
              About {weather?.city}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {cityInfo}
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
