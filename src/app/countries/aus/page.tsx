
import CountriesInfo, { CountryInfo } from '@/components/countryInfo';
import WeatherInfo from '@/components/weatherInfo';
import UKCostOfLiving from '@/components/costOfLiving/costOfLivingAUS';

import { useEffect, useState } from 'react';

export default  function Australia() {
 

  const countryData: CountryInfo = {
    country: "Australia",
    lat: 10.99,
    lon: 44.34,
    climate: "Temperate climate with four distinct seasons.",
    food: "The average diet consists of...",
    //@ts-ignore
    costOfLiving: <UKCostOfLiving />,
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