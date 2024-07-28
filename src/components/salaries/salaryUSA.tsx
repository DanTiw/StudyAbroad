import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SalaryItem {
  title: string;
  salary: string;
}

const salaryData: SalaryItem[] = [
  { title: "Software Engineer", salary: "$123,594" },
  { title: "Secondary School Teacher", salary: "$62,429" },
  { title: "Primary School Teacher", salary: "$61,000" },
  { title: "Special Needs Education Teacher", salary: "$59,198" },
  { title: "Professor", salary: "$72,742" },
  { title: "Flight Attendant", salary: "$55,468" },
  { title: "Sales Representative", salary: "$56,680" },
  { title: "Physical Therapist", salary: "$84,973" },
  { title: "Engineer", salary: "$107,250" },
  { title: "Database Administrator", salary: "$105,683" },
  { title: "Registered Nurse", salary: "$75,507" },
];

const SalaryUSA: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Average Salaries in the USA</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {salaryData.map((item, index) => (
            <li key={index} className="flex justify-between items-center border-b last:border-b-0 py-2">
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-600">{item.salary}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SalaryUSA;