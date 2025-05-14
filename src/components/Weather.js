import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          
          const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
          const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

          const weatherResponse = await axios.get(weatherApiUrl);
          const forecastResponse = await axios.get(forecastApiUrl);

          setWeatherData(weatherResponse.data);
          setForecastData(forecastResponse.data);
          setError(null);
        } catch (err) {
          setWeatherData(null);
          setForecastData(null);
          setError("City not found");
        }
      };

      fetchWeather();
    }
  }, [city]);

  return (
    <div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>Temperature: {Math.round(weatherData.main.temp)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
      {forecastData && (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {forecastData.list.slice(0, 8).map((forecast, index) => (
              <div key={index} style={{ margin: "10px", textAlign: "center" }}>
                <p>{new Date(forecast.dt * 1000).getHours()}:00</p>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                  style={{ width: "50px", height: "50px" }}
                />
                <p>{Math.round(forecast.main.temp)} °C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
