import React from 'react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">About Study Abroad Compass</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Charting Your Course in Global Education</h2>
        <p className="mb-4">
          Dreaming of studying abroad but overwhelmed by options? We understand. At Study Abroad Compass, we've been there too.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">The Challenge of Choosing</h3>
        <p className="mb-4">
          Selecting the perfect country for international education is complex. From understanding education systems to evaluating living costs and career prospects – the variables seem endless.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4">
          We're creating Study Abroad Compass to simplify your decision-making process. Our platform will offer:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Country profiles with key information on climate, culture, and education</li>
          <li>Real-time data on living costs and exchange rates</li>
          <li>Insights into local diets and food cultures</li>
          <li>Safety indexes and population density information</li>
          <li>Tools to compare countries based on your preferences</li>
          <li>Resources for visa requirements and applications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Be Part of Our Journey</h3>
        <p className="mb-4">
          We're building this platform and want you involved from the start. Your insights will shape our tools and resources.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Help Us Help You</h3>
        <p className="mb-4">
          Take our pre-launch survey to help ensure Study Abroad Compass addresses real student challenges.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">Early Access</Badge>
          <Badge variant="secondary">Exclusive Resources</Badge>
        </div>
        <Button 
        >
          <Link
            href="/contact"
          >
            Contact Us
          </Link>
        </Button>
      </section>

      <section className="text-center">
        <p className="mb-4">
          Join us in revolutionizing study abroad decision-making. Your adventure awaits!
        </p>
        <p className="font-semibold">
          Study Abroad Compass Team
        </p>
      </section>
    </div>
  );
};

export default AboutPage;