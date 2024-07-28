// components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <p className="text-lg font-semibold text-gray-700 hover:text-gray-900">Home</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about">
            <p className="text-lg font-semibold text-gray-700 hover:text-gray-900">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-lg font-semibold text-gray-700 hover:text-gray-900">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
