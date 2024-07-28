import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const CostOfLivingList = () => {
  const data = {
    "Country Name": "United States",
    "Cost of Living Month Total": "1240.97",
    "Currency": "USD",
    "Note": "Total cost of living in United States for two person with average consumption for one month will be 1240.97 USD, no rent price included",
    "Categories": [
      {
        name: "Restaurants",
        items: [
          { cost: "Meal in Inexpensive Restaurant", value: "13.13" },
          { cost: "Meal for 2 People, Mid-range Restaurant, Three-course", value: "50.50" },
          { cost: "McMeal at McDonalds or Alternative Combo Meal", value: "7.07" },
          { cost: "Domestic Beer, 0.5 liter Draught", value: "4.04" },
          { cost: "Imported Beer, 0.33 liter Bottle", value: "5.05" },
          { cost: "Cappuccino", value: "3.96" },
          { cost: "Coca-Cola, 0.33 liter Bottle", value: "1.77" }
        ]
      },
      {
        name: "Markets",
        items: [
          { cost: "Milk, Regular,1 liter", value: "0.86" },
          { cost: "Loaf of Fresh White Bread, 0.5 kg", value: "2.59" },
          { cost: "Rice, 1 kg", value: "3.95" },
          { cost: "Eggs, 12 pack", value: "2.51" },
          { cost: "Local Cheese, 1 kg", value: "10.86" },
          { cost: "Chicken Breasts, Boneless and Skinless, 1 kg", value: "8.65" },
          { cost: "Beef Round, 1 kg", value: "11.63" }
        ]
      },
      {
        name: "Transportation",
        items: [
          { cost: "One-way Ticket, Local Transport", value: "2.27" },
          { cost: "Monthly Pass, Regular Price", value: "65.65" },
          { cost: "Taxi Start, Normal Tariff", value: "3.03" },
          { cost: "Gasoline, 1 liter", value: "0.64" }
        ]
      },
      {
        name: "Utilities (Monthly)",
        items: [
          { cost: "Basic utilities for 85m2 Apartment", value: "149.17" },
          { cost: "Internet, 60 Mbps or More, Unlimited Data", value: "57.23" }
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

export default CostOfLivingList;