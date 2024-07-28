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
    { name: "Full English Breakfast", description: "Bacon, eggs, sausages, baked beans, toast, mushrooms, and tomatoes." },
    { name: "Porridge", description: "Oatmeal cooked with milk or water." },
    { name: "Toast with Marmalade", description: "Buttered toast with orange marmalade." },
    { name: "Cereal", description: "Cornflakes, Weetabix, or muesli." },
  ],
  Lunch: [
    { name: "Sandwiches", description: "Cheese and pickle, ham and cheese, or egg and cress." },
    { name: "Ploughman's Lunch", description: "Cheese, bread, pickles, and cold meats." },
    { name: "Soup", description: "Tomato, chicken, or vegetable soup." },
    { name: "Pies", description: "Pork pies or pasties." },
  ],
  Dinner: [
    { name: "Roast Dinner", description: "Roast beef, chicken, or lamb with potatoes, vegetables, and gravy." },
    { name: "Fish and Chips", description: "Battered fish with fried potatoes." },
    { name: "Shepherd's Pie", description: "Minced meat with a mashed potato topping." },
    { name: "Curry", description: "Chicken tikka masala or other Indian-inspired dishes." },
  ],
  Snacks: [
    { name: "Crisps", description: "Potato chips in various flavors." },
    { name: "Biscuits", description: "Digestive biscuits, shortbread, or Jaffa cakes." },
    { name: "Fruit", description: "Apples, pears, and berries." },
    { name: "Tea and Scones", description: "Afternoon tea with scones, clotted cream, and jam." },
  ],
};

const FoodUK: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">UK Food Information</h1>
      
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
                <CardTitle className="text-xl md:text-2xl">{meal} in the UK</CardTitle>
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

export default FoodUK;