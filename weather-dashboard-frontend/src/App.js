import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        if (!city.trim()) {
            alert('Please enter a city name');
            return;
        }
        try {
            const response = await axios.get('http://localhost:5000/weather', {
                params: { city },
            });
            console.log('Weather response:', response.data);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather:', error); // Log full error object
            alert('Failed to fetch weather data. Please try again later.');
        }
    };
    

    return (
        <div>
            <h1>Weather Dashboard</h1>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Description: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default App;
