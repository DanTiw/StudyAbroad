import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WeatherInfo from '@/components/weatherInfo';
import PopulationInfo from '@/components/populationDensity';
import PopulationUSA from './populations/populationUSA';
import PopulationAUS from './populations/populationAUS';
import PopulationUK from './populations/populationUK';
import FoodUSA from '@/components/food/foodUSA';
import FoodUK from '@/components/food/foodUK';
import FoodAUS from '@/components/food/foodAUS';
import SalaryUSA from '@/components/salaries/salaryUSA';
import SalaryUK from './salaries/salaryUK';
import SalaryAUS from './salaries/salaryAUS';

interface Link {
  title: string;
  url: string;
}

interface AverageSalary {
  percentile50: string;
  percentile25: string;
  percentile75: string;
}

interface PopulationData {
  totalPopulation: string;
  density: string;
  malePercentage: string;
  femalePercentage: string;
  medianAge: string;
  urbanPopulation: string;
  growthRate: string;
}

interface MapData {
  mapsrc: string;
  src: string;
  href: string;
  title: string;
}

export interface CountryInfo {
  country: string;
  lon: number;
  lat: number;
  climate: string;
  food: string;
  costOfLiving: string;
  averageSalary: AverageSalary;
  populationData: PopulationData;
  mapData: MapData;
 
  links: Link[];
}

const CountriesInfo: React.FC<CountryInfo> = ({ 
  country,
  lon,
  lat,
  climate,
  food,
  costOfLiving,

  populationData,
  mapData,
 
  links
}) => {
  const getPopulationComponent = () => {
    switch(country.toLowerCase()) {
      case 'united states':
        return <PopulationUSA />;
      case 'australia':
        return <PopulationAUS />;
      case 'united kingdom':
        return <PopulationUK />;
      default:
        return <PopulationInfo populationData={populationData} mapData={mapData} />;
    }
  }
  const getFoodComponent = () => {
    switch(country.toLowerCase()) {
      case 'united states':
        return <FoodUSA />;
      case 'australia':
        return <FoodAUS />;
      case 'united kingdom':
        return <FoodUK />;
      default:
        return (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Food: Average Diet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{food}</p>
            </CardContent>
          </Card>
        );
    }
  }
  const getSalaryComponent = () => {
    switch(country.toLowerCase()) {
      case 'united states':
        return <SalaryUSA />;
      case 'united kingdom':
        return <SalaryUK />;
      case 'australia':
        return <SalaryAUS />;
      default:
        return (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Salary Information Not Available</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We don't have specific salary information for this country.</p>
            </CardContent>
          </Card>
        );
    }
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Country Information: {country}</h1>
      
      <Tabs defaultValue="climate" className="w-full p-2">
        <TabsList className="flex flex-wrap justify-center mb-6">
          <TabsTrigger value="climate" className="mb-2 mr-2">Climate and Location</TabsTrigger>
          <TabsTrigger value="food" className="mb-2 mr-2">Food</TabsTrigger>
          <TabsTrigger value="living" className="mb-2 mr-2">Cost of Living</TabsTrigger>
          <TabsTrigger value="salary" className="mb-2 mr-2">Average Salary</TabsTrigger>
          <TabsTrigger value="population" className="mb-2 mr-2">Population</TabsTrigger>
          <TabsTrigger value="links" className="mb-2">Popular Links</TabsTrigger>
        </TabsList>

        <TabsContent value="climate">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Climate and Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{climate}</p>
              <WeatherInfo lon={lon} lat={lat} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food">
          {getFoodComponent()}
        </TabsContent>

        <TabsContent value="living">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Cost of Living</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{costOfLiving}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Average Salary</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{getSalaryComponent()}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="population">
          {getPopulationComponent()}
        </TabsContent>

      

        <TabsContent value="links">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Popular Links</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                {links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href={link.url} target="_blank" className="text-blue-600 hover:underline break-words">{link.title}</a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CountriesInfo;