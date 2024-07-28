

import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const AustraliaCostOfLivingList = () => {
  const data = {
    "Country Name": "Australia",
    "Cost of Living Month Total": "2141.06",
    "Currency": "AUD",
    "Note": "Total cost of living in Australia for two person with average consumption for one month will be 2141.06 AUD, no rent price included",
    "Categories": [
      {
        name: "Restaurants",
        items: [
          { cost: "Meal in Inexpensive Restaurant", value: "20.13" },
          { cost: "Meal for 2 People, Mid-range Restaurant, Three-course", value: "89.43" },
          { cost: "McMeal at McDonalds or Alternative Combo Meal", value: "11.19" },
          { cost: "Domestic Beer, 0.5 liter Draught", value: "7.82" },
          { cost: "Imported Beer, 0.33 liter Bottle", value: "8.94" },
          { cost: "Cappuccino", value: "4.73" },
          { cost: "Coca-Cola, 0.33 liter Bottle", value: "3.54" }
        ]
      },
      {
        name: "Markets",
        items: [
          { cost: "Milk, Regular,1 liter", value: "1.59" },
          { cost: "Loaf of Fresh White Bread, 0.5 kg", value: "2.85" },
          { cost: "White Rice, 1 kg", value: "2.99" },
          { cost: "Eggs, 12 pack", value: "4.94" },
          { cost: "Local Cheese, 1 kg", value: "10.20" },
          { cost: "Chicken Breasts, Boneless and Skinless, 1 kg", value: "11.24" },
          { cost: "Beef Round or Equivalent Back Leg Red Meat, 1 kg", value: "16.97" }
        ]
      },
      {
        name: "Transportation",
        items: [
          { cost: "One-way Ticket, Local Transport", value: "4.47" },
          { cost: "Monthly Pass, Regular Price", value: "156.50" },
          { cost: "Taxi Start, Normal Tariff", value: "4.47" },
          { cost: "Gasoline, 1 liter", value: "1.49" }
        ]
      },
      {
        name: "Utilities (Monthly)",
        items: [
          { cost: "Basic utilities for 85m2 Apartment including Electricity, Heating or Cooling, Water and Garbage", value: "221.94" },
          { cost: "Internet, 60 Mbps or More, Unlimited Data, Cable/ADSL", value: "81.11" }
        ]
      }
    ]
  };


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Cost of Living in {data["Country Name"]}</h1>
      <p className="mb-4">{data.Note}</p>
      <p className="text-xl font-semibold mb-4">
        Total Monthly Cost: {data["Cost of Living Month Total"]} {data.Currency}
      </p>
      
      {data.Categories.map((category, index) => (
        <Card key={index} className="mb-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">{category.name}</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between">
                  <span>{item.cost}</span>
                  <span className="font-semibold">{item.value} {data.Currency}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AustraliaCostOfLivingList;