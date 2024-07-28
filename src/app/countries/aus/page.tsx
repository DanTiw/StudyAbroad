
import CountriesInfo, { CountryInfo } from '@/components/countryInfo';
import WeatherInfo from '@/components/weatherInfo';
import AustraliaCostOfLivingList from '@/components/costOfLiving/costOfLivingAUS';

import { useEffect, useState } from 'react';

export default  function Australia() {
 
  const ausPopulationData = {
    totalPopulation: "331,002,651",
    density: "36",
    malePercentage: "49.2%",
    femalePercentage: "50.8%",
    medianAge: "38.1",
    urbanPopulation: "82.7%",
    growthRate: "0.1%"
  };

  const ausMapData = {
    src: "http://mapseinbindung.com/'>www.mapseinbindung.com",
    
    title: "Australia"
  };
  const countryData: CountryInfo = {
    country: "Australia",
    lat: 10.99,
    lon: 44.34,
    climate: "Temperate climate with four distinct seasons.",
    food: "The average diet consists of...",
    //@ts-ignore
    costOfLiving: <AustraliaCostOfLivingList />,
    averageSalary: {
      percentile50: "$50,000",
      percentile25: "$35,000",
      percentile75: "$75,000"
    },
    populationDensity: "The population density is approximately...",
    crime: "The crime rate is relatively low...",
    links: [
      { title: "Visa Application Guide", url: "#" },
      { title: "Scholarship Information", url: "#" },
      { title: "Tourism Board", url: "#" }
    ]
  };

  return <CountriesInfo {...countryData} />;
}