"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PopulationUK: React.FC = () => {
  const populationData = {
    totalPopulation: "67,978,678",
    density: "278.98",
    malePercentage: "49.2%",
    femalePercentage: "50.8%",
    medianAge: "40.1",
    urbanPopulation: "58,353,588",
    growthRate: "0.33%",
  };

  const mapData = {
    mapsrc: "https://maps.google.com/maps?q=united%20kingdom&t=&z=5&ie=UTF8&iwloc=&output=embed",
    href: "https://www.google.com/maps/place/United+Kingdom",
    title: "United Kingdom"
  };

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
            src={mapData.mapsrc}
          ></iframe>
          <a href={mapData.href} className="text-sm text-gray-500 hover:underline" target="_blank" rel="noopener noreferrer">Map source</a>
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

export default PopulationUK;