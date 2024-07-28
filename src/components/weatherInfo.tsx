"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WeatherData {
  temperature: number;
  feelsLike: number;
  description: string;
  icon: string;
  cityName: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  visibility: number;
  sunrise: number;
  sunset: number;
}

interface WeatherInfoProps {
  lat: number;
  lon: number;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        if (response.ok) {
          console.log('fetch weather data');
        }
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        setWeatherData({
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          cityName: data.name,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind.speed,
          windDirection: data.wind.deg,
          visibility: data.visibility,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        });
      } catch (err) {
        setError('Error fetching weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon]);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>{error}</div>;
  if (!weatherData) return null;

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Current Weather in {weatherData.cityName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex items-center justify-center">
            <img 
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`} 
              alt={weatherData.description} 
              className="mr-2 w-16 h-16"
            />
            <div>
              <p className="text-4xl font-bold">{weatherData.temperature.toFixed(1)}°C</p>
              <p className="text-xl capitalize">{weatherData.description}</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Feels Like</p>
            <p>{weatherData.feelsLike.toFixed(1)}°C</p>
          </div>
          <div>
            <p className="font-semibold">Humidity</p>
            <p>{weatherData.humidity}%</p>
          </div>
          <div>
            <p className="font-semibold">Pressure</p>
            <p>{weatherData.pressure} hPa</p>
          </div>
          <div>
            <p className="font-semibold">Wind</p>
            <p>{weatherData.windSpeed.toFixed(1)} m/s, {weatherData.windDirection}°</p>
          </div>
          <div>
            <p className="font-semibold">Visibility</p>
            <p>{(weatherData.visibility / 1000).toFixed(1)} km</p>
          </div>
          <div>
            <p className="font-semibold">Sunrise</p>
            <p>{formatTime(weatherData.sunrise)}</p>
          </div>
          <div>
            <p className="font-semibold">Sunset</p>
            <p>{formatTime(weatherData.sunset)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherInfo;