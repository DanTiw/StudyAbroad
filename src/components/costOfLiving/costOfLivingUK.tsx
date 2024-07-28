import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const UKCostOfLivingList = () => {
  const data = {
    "Country Name": "United Kingdom",
    "Cost of Living Month Total": "1441.29",
    "Currency": "USD",
    "Note": "Total cost of living in United Kingdom for two person with average consumption for one month will be 1441.29 USD, no rent price included",
    "Categories": [
      {
        name: "Restaurants",
        items: [
          { cost: "Meal in Inexpensive Restaurant", value: "16.88" },
          { cost: "Meal for 2 People, Mid-range Restaurant, Three-course", value: "70.31" },
          { cost: "McMeal at McDonalds or Alternative Combo Meal", value: "7.03" },
          { cost: "Domestic Beer, 0.5 liter Draught", value: "4.93" },
          { cost: "Imported Beer, 0.33 liter Bottle", value: "4.93" },
          { cost: "Cappuccino", value: "3.58" },
          { cost: "Coca-Cola, 0.33 liter Bottle", value: "1.67" }
        ]
      },
      {
        name: "Markets",
        items: [
          { cost: "Milk, Regular,1 liter", value: "1.24" },
          { cost: "Loaf of Fresh White Bread, 0.5 kg", value: "1.32" },
          { cost: "White Rice, 1 kg", value: "1.69" },
          { cost: "Eggs, 12 pack", value: "2.61" },
          { cost: "Local Cheese, 1 kg", value: "7.53" },
          { cost: "Chicken Breasts, Boneless and Skinless, 1 kg", value: "8.28" },
          { cost: "Beef Round or Equivalent Back Leg Red Meat, 1 kg", value: "10.97" }
        ]
      },
      {
        name: "Transportation",
        items: [
          { cost: "One-way Ticket, Local Transport", value: "3.38" },
          { cost: "Monthly Pass, Regular Price", value: "84.36" },
          { cost: "Taxi Start, Normal Tariff", value: "4.22" },
          { cost: "Gasoline, 1 liter", value: "1.62" }
        ]
      },
      {
        name: "Utilities (Monthly)",
        items: [
          { cost: "Basic utilities for 85m2 Apartment including Electricity, Heating or Cooling, Water and Garbage", value: "198.69" },
          { cost: "Internet, 60 Mbps or More, Unlimited Data, Cable/ADSL", value: "33.94" }
        ]
      }
    ]
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cost of Living in {data["Country Name"]}</h1>
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

export default UKCostOfLivingList;