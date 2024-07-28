import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SalaryItem {
  title: string;
  salary: string;
}

const salaryData: SalaryItem[] = [
  { title: "Software Engineer", salary: "£57,612" },
  { title: "Secondary School Teacher", salary: "£42,818" },
  { title: "Primary School Teacher", salary: "£40,059" },
  { title: "Special Needs Education Teacher", salary: "£36,258" },
  { title: "Professor", salary: "£47,726" },
  { title: "Flight Attendant", salary: "£23,500" },
  { title: "Sales Representative", salary: "£30,000" },
  { title: "Physical Therapist", salary: "£44,802" },
  { title: "Engineer", salary: "£39,074" },
  { title: "Database Administrator", salary: "£45,288" },
  { title: "Registered Nurse", salary: "£41,523" },
];

const SalaryUK: React.FC = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Average Salaries in the UK</CardTitle>
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

export default SalaryUK;