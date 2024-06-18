'use client'
import Link from 'next/link'
import React, { useState } from 'react'


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-gradient-to-tr from-blue-700 to-red-500 text-white sticky top-0 z-10">
      <section className="max-w-7xl mx-auto py-2 px-4 lg:p-4 flex justify-between items-center">
        <h1 className="text-lg lg:text-3xl font-medium">

          <Link href="/"><span className="">🚀</span>SchoolPilot</Link>
        </h1>

        <div className="text-2xl font-medium">
          <button type="button" id="hamburger-button" className="block text-2xl lg:hidden text-white  cursor-pointer" onClick={toggleMobileMenu}>☰</button>

          <nav aria-label="main" className="hidden lg:block space-x-8 text-xl">
            <Link href="/" className="text-base font-normal hover:opacity-90">Home</Link>
            <Link href="/about" className="text-base font-normal hover:opacity-90">About</Link>
            <Link href="/contact" className="text-base font-normal hover:opacity-90">Contact</Link>
            <Link href="/software" className="text-base font-normal hover:opacity-90">Our Software</Link>
          </nav>
        </div>

          <nav aria-label="main" className="hidden lg:block space-x-8 text-xl">
            <Link href="/auth" className="text-base font-normal hover:opacity-90">Login</Link>
            <Link href="/get-started" className="border border-white px-4 py-2 rounded-3xl text-base font-normal hover:opacity-90">Register</Link>
          </nav>
      </section>

      {isMobileMenuOpen && (
        <section id="mobile-menu" className="absolute top-0 bg-black w-full text-xl flex-col justify-content">
          <button type="button" className="mt-4 text-4xl md:text-6xl self-end px-6" onClick={toggleMobileMenu}>&times;</button>
          <nav className="flex flex-col min-h-screen item-center py-4" aria-label="mobile">
            <Link onClick={toggleMobileMenu} href="/" className="w-full lg:text-3xl text-center py-4 hover:opacity-90">Home</Link>
            <Link onClick={toggleMobileMenu} href="/about" className="w-full lg:text-3xl text-center py-4 hover:opacity-90">About</Link>
            <Link onClick={toggleMobileMenu} href="/software" className="w-full lg:text-3xl text-center py-4 hover:opacity-90">Our Software</Link>
            <Link onClick={toggleMobileMenu} href="/contact" className="w-full lg:text-3xl text-center py-4 hover:opacity-90">Contact</Link>
            <Link onClick={toggleMobileMenu} href="/auth" className="w-full lg:text-3xl text-center py-4 hover:opacity-90"><span className='border border-white bg-white text-black py-2 px-6 rounded-3xl'>Login</span></Link>
            <Link onClick={toggleMobileMenu} href="/get-started" className="w-full lg:text-3xl text-center py-4 hover:opacity-90"><span className='border border-white py-2 px-6 rounded-3xl'>Register</span></Link>
          </nav>
        </section>
      )}

    </nav>
  )
}

export default Navbar