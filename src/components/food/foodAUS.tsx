"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FoodItem {
  name: string;
  description: string;
}

interface MealData {
  [key: string]: FoodItem[];
}

const foodData: MealData = {
  Breakfast: [
    { name: "Vegemite on Toast", description: "A spread of Vegemite on buttered toast." },
    { name: "Weet-Bix", description: "A popular breakfast cereal served with milk." },
    { name: "Avocado Toast", description: "Smashed avocado on toast, sometimes with poached eggs." },
    { name: "Muesli", description: "Often served with yogurt and fresh fruit." },
  ],
  Lunch: [
    { name: "Meat Pies", description: "Puff pastry filled with minced meat and gravy." },
    { name: "Sausage Rolls", description: "Pastry-wrapped sausage meat." },
    { name: "Sandwiches", description: "Chicken, ham, or salad sandwiches." },
    { name: "Fish and Chips", description: "Battered fish fillets with fries." },
  ],
  Dinner: [
    { name: "Barbecue", description: "Grilled meats such as sausages, steaks, and lamb chops." },
    { name: "Roast Lamb", description: "Roasted lamb with vegetables and gravy." },
    { name: "Pasta", description: "Spaghetti Bolognese or other pasta dishes." },
    { name: "Seafood", description: "Prawns, oysters, and fish dishes." },
  ],
  Snacks: [
    { name: "Tim Tams", description: "Popular chocolate-coated biscuits." },
    { name: "Lamingtons", description: "Sponge cake squares coated in chocolate and coconut." },
    { name: "Fruits", description: "Mangoes, bananas, and apples." },
    { name: "Biscuits", description: "Various types of sweet and savory biscuits." },
  ],
};

const FoodAUS: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Australian Food Information</h1>
      
      <Tabs value={selectedMeal} onValueChange={setSelectedMeal} className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-6">
          {Object.keys(foodData).map((meal) => (
            <TabsTrigger key={meal} value={meal} className="mb-2 mr-2">
              {meal}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(foodData).map(([meal, items]) => (
          <TabsContent key={meal} value={meal}>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">{meal} in Australia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {items.map((item, index) => (
                    <li key={index} className="border-b pb-2 last:border-b-0">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FoodAUS;