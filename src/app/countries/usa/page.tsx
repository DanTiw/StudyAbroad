
import CountriesInfo, { CountryInfo } from '@/components/countryInfo';
import WeatherInfo from '@/components/weatherInfo';
import USACostOfLiving from '@/components/costOfLiving/costOfLiving';
import PopulationInfo from '@/components/populationDensity';
import { useEffect, useState } from 'react';

export default  function USA() {
 
  const usaPopulationData = {
    totalPopulation: "331,002,651",
    density: "36",
    malePercentage: "49.2%",
    femalePercentage: "50.8%",
    medianAge: "38.1",
    urbanPopulation: "82.7%",
    growthRate: "0.1%"
  };

  const usaMapData = {
    src: "http://mapseinbindung.com/'>www.mapseinbindung.com",
    href: "https://embedmaps.com/google-maps-authorization/script.js?id=e8924c316a319e4ef11fa2b986b01a044a3bc417%27%3E",
    title: "USA"
  };
  const countryData: CountryInfo = {
    country: "USA",
    lat: 10.99,
    lon: 44.34,
    climate: "Temperate climate with four distinct seasons.",
    food: "The average diet consists of...",
    //@ts-ignore
    costOfLiving: <USACostOfLiving />,
    averageSalary: {
      percentile50: "$50,000",
      percentile25: "$35,000",
      percentile75: "$75,000"
    },
    populationData: usaPopulationData,
    mapData: usaMapData,
    crime: "The crime rate is relatively low...",
    links: [
      { title: "Visa Application Guide", url: "#" },
      { title: "Scholarship Information", url: "#" },
      { title: "Tourism Board", url: "#" }
    ]
  };

  return <CountriesInfo {...countryData} />;
}