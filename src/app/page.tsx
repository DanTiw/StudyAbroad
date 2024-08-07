// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Study Abroad Compass</title>
        <meta name="description" content="Find information about studying abroad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold text-center mb-8">
          Study Abroad Compass
        </h1>

        <p className="text-xl text-center mb-12">
          Explore countries and find the perfect place for your studies!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {[
            { title: "USA", description: "Discover the climate, food, cost of living, salary information, population density, and safety index in the USA.",go:"/countries/usa", },
            { title: "UK", description: "Learn about the climate, food, cost of living, salary information, population density, and safety index in the UK.",go:"/countries/UK", },
            { title: "Australia", description: "Explore the climate, food, cost of living, salary information, population density, and safety index in Australia.",go:"/countries/aus", }, 
          ].map((item, index) => (
            <Link key={index} href={item.go} className="block p-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-lg   hover:shadow-xl bg-gray-100 hover:scale-105 transition duration-300 ">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.title} &rarr;</h2>
              <p className="font-normal text-white">{item.description}</p>
            </Link>
          ))}
        </div>
      </main>

    
    </div>
  )
}
