import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="border-t dark:border-0 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl overflow-hidden py-16 px-6 sm:py-24 lg:px-8 space-y-8">
        <nav className="columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer"><div className="pb-2">
          <Link href="/index" className="text-sm leading-6 footer-link font-sans">Homepage</Link></div><div className="pb-2">
            <Link href="/service" className="text-sm leading-6 footer-link font-sans">Our Software</Link></div><div className="pb-2">
            <Link href="/pricing" className="text-sm leading-6 footer-link font-sans">Pricing</Link></div><div className="pb-2">
            <Link href="/about" className="text-sm leading-6 footer-link font-sans">About Us</Link>
          </div>
          <div className="pb-2">
            <Link href="" className="text-sm leading-6 footer-link font-sans">Landing Page</Link></div>
        </nav>
        <div className="flex flex-wrap sm:justify-center gap-x-6 gap-y-4 preview-menu-wrapper relative">
          <Link href="#" className="text-gray-400 hover:text-primary" target="_blank">
            <AiFillFacebook className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary" target="_blank">
            <AiFillInstagram className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary" target="_blank">
            <AiFillYoutube className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary" target="_blank">
            <AiFillLinkedin className="w-6 h-6" />
          </Link>

        </div>
        <p className="sm:text-center text-xs leading-5 ">© All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer