import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WeatherInfo from '@/components/weatherInfo';
import PopulationInfo from '@/components/populationDensity';

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
  crime: string;
  links: Link[];
}

const CountriesInfo: React.FC<CountryInfo> = ({ 
  country,
  lon,
  lat,
  climate,
  food,
  costOfLiving,
  averageSalary,
  populationData,
  mapData,
  crime,
  links
}) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Country Information: {country}</h1>
      
      <Tabs defaultValue="climate" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-6">
          <TabsTrigger value="climate" className="mb-2 mr-2">Climate and Location</TabsTrigger>
          <TabsTrigger value="food" className="mb-2 mr-2">Food</TabsTrigger>
          <TabsTrigger value="living" className="mb-2 mr-2">Cost of Living</TabsTrigger>
          <TabsTrigger value="salary" className="mb-2 mr-2">Average Salary</TabsTrigger>
          <TabsTrigger value="population" className="mb-2 mr-2">Population</TabsTrigger>
          <TabsTrigger value="crime" className="mb-2 mr-2">Crime</TabsTrigger>
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
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Food: Average Diet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{food}</p>
            </CardContent>
          </Card>
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
              <ul className="list-disc pl-5">
                <li>50th percentile: {averageSalary.percentile50}</li>
                <li>25th percentile: {averageSalary.percentile25}</li>
                <li>75th percentile: {averageSalary.percentile75}</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="population">
          <PopulationInfo populationData={populationData} mapData={mapData} />
        </TabsContent>

        <TabsContent value="crime">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Crime</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{crime}</p>
            </CardContent>
          </Card>
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
                    <a href={link.url} className="text-blue-600 hover:underline break-words">{link.title}</a>
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