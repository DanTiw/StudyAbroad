'use client'
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
    { name: "Pancakes/Waffles", description: "Often served with maple syrup and butter." },
    { name: "Eggs and Bacon", description: "Scrambled or fried eggs with bacon strips." },
    { name: "Cereal", description: "Various types of cereals with milk." },
    { name: "Bagels", description: "Toasted bagels with cream cheese or butter." },
  ],
  Lunch: [
    { name: "Sandwiches", description: "Ham and cheese, turkey, or peanut butter and jelly." },
    { name: "Salads", description: "Caesar salad, Cobb salad, or mixed greens with various dressings." },
    { name: "Burgers", description: "Cheeseburgers or hamburgers with lettuce, tomato, and condiments." },
    { name: "Pizza", description: "Various toppings, typically with cheese and tomato sauce." },
  ],
  Dinner: [
    { name: "Steak", description: "Grilled steak with sides like mashed potatoes and steamed vegetables." },
    { name: "Pasta", description: "Spaghetti with marinara or Alfredo sauce." },
    { name: "Chicken", description: "Baked or fried chicken with sides such as rice and green beans." },
    { name: "Tacos", description: "Ground beef or chicken tacos with lettuce, cheese, and salsa." },
  ],
  Snacks: [
    { name: "Chips", description: "Potato chips or tortilla chips with salsa or dip." },
    { name: "Cookies", description: "Chocolate chip, oatmeal raisin, or sugar cookies." },
    { name: "Fruits", description: "Apples, bananas, and grapes." },
    { name: "Popcorn", description: "Often buttered or lightly salted." },
  ],
};

const FoodUSA: React.FC = () => {
  const [selectedMeal, setSelectedMeal] = useState<string>("Breakfast");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">USA Food Information</h1>
      
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
                <CardTitle className="text-xl md:text-2xl">{meal} in America</CardTitle>
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

export default FoodUSA;