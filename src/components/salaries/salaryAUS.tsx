import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SalaryItem {
  title: string;
  salary: string;
}

const salaryData: SalaryItem[] = [
  { title: "Software Engineer", salary: "125,000 AUD" },
  { title: "Secondary School Teacher", salary: "96,460 AUD" },
  { title: "Primary School Teacher", salary: "96,590 AUD" },
  { title: "Special Needs Education Teacher", salary: "92,500 AUD" },
  { title: "Professor", salary: "166,473 AUD" },
  { title: "Flight Attendant", salary: "59,600 AUD" },
  { title: "Sales Representative", salary: "80,000 AUD" },
  { title: "Physical Therapist", salary: "93,959 AUD" },
  { title: "Engineer", salary: "112,429 AUD" },
  { title: "Database Administrator", salary: "113,000 AUD" },
  { title: "Registered Nurse", salary: "82,805 AUD" },
];

const SalaryAUS: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Average Salaries in Australia</CardTitle>
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

export default SalaryAUS;