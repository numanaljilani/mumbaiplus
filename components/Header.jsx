'use client';
import { useState } from 'react';
import Link from 'next/link';
import GoogleTranslator from './GoogleTranslator';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-800 cursor-pointer">NewsHub</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-800 font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-800 font-medium">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium">Contact</Link>
            <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Politics</a>
            <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Technology</a>
            <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Sports</a>
          </nav>

          {/* Search, Translator and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <GoogleTranslator />
            <button className="text-gray-600 hover:text-blue-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-800 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-800 font-medium">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-800 font-medium">Contact</Link>
              <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Politics</a>
              <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Technology</a>
              <a href="#" className="text-gray-700 hover:text-blue-800 font-medium">Sports</a>
              <div className="pt-2">
                <GoogleTranslator />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}