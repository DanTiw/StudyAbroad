
import CountriesInfo, { CountryInfo } from '@/components/countryInfo';
import WeatherInfo from '@/components/weatherInfo';
import UKCostOfLiving from '@/components/costOfLiving/costOfLivingUK';

import { useEffect, useState } from 'react';

export default  function UK() {
 
  const ausPopulationData = {
    totalPopulation: "331651",
    density: "36",
    malePercentage: "49.2%",
    femalePercentage: "50.8%",
    medianAge: "38.1",
    urbanPopulation: "82.7%",
    growthRate: "0.1%"
  };

  const ausMapData = {
    src: "http://mapseinbindung.com/",
    title: "United Kingdom"
  };
  const countryData: CountryInfo = {
    country: "United Kingdom",
    lat: 51.509865,
    lon: -0.118092,
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
      { title: "Visa Application Guide", url: "https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents" },
      { title: "Scholarship Information", url: "https://study-uk.britishcouncil.org/scholarships-funding" },
      { title: "Tourism Board", url: "https://www.visitbritain.com/en" }
    ]
  };

  return <CountriesInfo {...countryData} />;
}