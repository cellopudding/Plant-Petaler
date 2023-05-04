import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/weather', {
      params: {
        city: 'New York',
        apiKey: 'your_api_key_here'
      }
    }).then(response => {
      setWeatherData(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h2>{weatherData.city}</h2>
          <p>{weatherData.temperature}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
