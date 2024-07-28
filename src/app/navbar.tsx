// components/Navbar.js
import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className="   shadow-md">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div>
          <Link href="/">
         
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={70}
              height={70}
              className='rounded-full hover:scale-110 transition duration-300'
          />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about">
            <p className="text-lg font-semibold text-white-700  hover:scale-110 transition duration-300">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-lg font-semibold text-white-700  hover:scale-110 transition duration-300">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}
