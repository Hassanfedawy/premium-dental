"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const services = [
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Damon Braces", href: "/services/damon-braces" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <Link href="/">Elite Smile</Link>
        </h1>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium relative">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-gray-600 transition py-2">
                Services
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-48"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/gallery" className="hover:text-gray-600 transition py-2">Gallery</Link>
          </div>

          <a
            href="/booking"
            className="bg-black text-white px-5 py-2 rounded-full hover:opacity-80 transition"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}