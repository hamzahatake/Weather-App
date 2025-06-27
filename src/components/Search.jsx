import Button from '@mui/material/Button';
import SearchBox from './SearchBox';
import { useState } from 'react';
import { BASE_URL, API_KEY } from './config';
import './Search.css';

export default function Search() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchWeather = async () => {
        if (!city.trim()) {
            setError("Please enter a city")
            return;
        }
        setLoading(true);
        setError(null);
        setWeather(null);

        const API_KEY = '20c1582fe73411d2ca816527426cbf8e';
        const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

        try {
            const url = `${BASE_URL}?q=${city.trim()}&appid=${API_KEY}&units=metric`;
            const res = await fetch(url);
            if (!res.ok) { throw new Error("City not found") }
            const data = await res.json();
            const main = data.main
            setWeather({
                Temp: main.temp,
                Humidity: main.humidity,
                Min: main.temp_min,
                Max: main.temp_max
            })
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <SearchBox city={city} setCity={setCity} />
            {error && <p>{error}</p>}
            <Button variant="contained" onClick={fetchWeather} disabled={isLoading}>Search</Button>
            {isLoading && <p>Loading...</p>}
            {weather &&
                <ul>
                    <li>Temp: {weather.Temp}</li>
                    <li>Humidity: {weather.Humidity}</li>
                    <li>Min: {weather.Min}</li>
                    <li>Max: {weather.Max}</li>
                </ul>}
        </>
    );
}