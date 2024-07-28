
import CountriesInfo, { CountryInfo } from '@/components/countryInfo';

import USACostOfLiving from '@/components/costOfLiving/costOfLiving';


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
    mapsrc:"https://maps.google.com/maps?width=621&amp;height=549&amp;hl=en&amp;q=%20USA+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed",
    src: "http://mapseinbindung.com/'>www.mapseinbindung.com",
    href: "https://embedmaps.com/google-maps-authorization/script.js?id=e8924c316a319e4ef11fa2b986b01a044a3bc417%27%3E",
    title: "USA"
  };
  const countryData: CountryInfo = {
    country: "United States",
    lat:  38.889805,
    lon:  -77.009056,
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
    
    links: [
      { title: "Visa Application Guide", url: "https://www.usa.gov/tourist-visa" },
      { title: "Scholarship Information", url: "https://www.scholars4dev.com/6499/scholarships-in-usa-for-international-students/" },
      { title: "Tourism Board", url: "https://www.visittheusa.com/" }
    ]
  };

  return <CountriesInfo {...countryData} />;
}