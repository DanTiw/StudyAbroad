"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

interface PopulationInfoProps {
  populationData: PopulationData;
  mapData: MapData;
}

const PopulationInfo: React.FC<PopulationInfoProps> = ({ populationData, mapData }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 max-w-6xl mx-auto">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>{mapData.title} Map</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe 
            width="100%" 
            height="400" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?width=621&amp;height=549&amp;hl=en&amp;q=%20USA+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href={mapData.href} className="text-sm text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">Map source</a>
          <script type='text/javascript' src={mapData.src}></script>
        </CardContent>
      </Card>
      
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>{mapData.title} Population Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><strong>Total Population:</strong> {populationData.totalPopulation}</li>
            <li><strong>Population Density:</strong> {populationData.density} people per km²</li>
            <li><strong>Gender Ratio:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Male: {populationData.malePercentage}</li>
                <li>Female: {populationData.femalePercentage}</li>
              </ul>
            </li>
            <li><strong>Median Age:</strong> {populationData.medianAge} years</li>
            <li><strong>Urban Population:</strong> {populationData.urbanPopulation}</li>
            <li><strong>Population Growth Rate:</strong> {populationData.growthRate} annually</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default PopulationInfo;