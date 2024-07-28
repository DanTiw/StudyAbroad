import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const UKCostOfLivingList = () => {
  const data = {
    "Country Name": "United Kingdom",
    "Cost of Living Month Total": "1123.20",
    "Currency": "GBP",
    "Note": "Total cost of living in United Kingdom for two person with average consumption for one month will be 1123.20 GBP, no rent price included",
    "Categories": [
      {
        name: "Restaurants",
        items: [
          { cost: "Meal in Inexpensive Restaurant", value: "13.16" },
          { cost: "Meal for 2 People, Mid-range Restaurant, Three-course", value: "54.84" },
          { cost: "McMeal at McDonalds or Alternative Combo Meal", value: "5.48" },
          { cost: "Domestic Beer, 0.5 liter Draught", value: "3.84" },
          { cost: "Imported Beer, 0.33 liter Bottle", value: "3.84" },
          { cost: "Cappuccino", value: "2.79" },
          { cost: "Coca-Cola, 0.33 liter Bottle", value: "1.30" }
        ]
      },
      {
        name: "Markets",
        items: [
          { cost: "Milk, Regular,1 liter", value: "0.97" },
          { cost: "Loaf of Fresh White Bread, 0.5 kg", value: "1.03" },
          { cost: "White Rice, 1 kg", value: "1.32" },
          { cost: "Eggs, 12 pack", value: "2.04" },
          { cost: "Local Cheese, 1 kg", value: "5.87" },
          { cost: "Chicken Breasts, Boneless and Skinless, 1 kg", value: "6.46" },
          { cost: "Beef Round or Equivalent Back Leg Red Meat, 1 kg", value: "8.55" }
        ]
      },
      {
        name: "Transportation",
        items: [
          { cost: "One-way Ticket, Local Transport", value: "2.64" },
          { cost: "Monthly Pass, Regular Price", value: "65.80" },
          { cost: "Taxi Start, Normal Tariff", value: "3.29" },
          { cost: "Gasoline, 1 liter", value: "1.26" }
        ]
      },
      {
        name: "Utilities (Monthly)",
        items: [
          { cost: "Basic utilities for 85m2 Apartment including Electricity, Heating or Cooling, Water and Garbage", value: "154.98" },
          { cost: "Internet, 60 Mbps or More, Unlimited Data, Cable/ADSL", value: "26.47" }
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