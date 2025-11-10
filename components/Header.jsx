'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GoogleTranslator from './GoogleTranslator';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b-8 border-mp-red">
      <div className="bg-mp-red text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm font-bold">
          हिंदी साप्ताहिक ▪ RNI No. MAHHI/2009/28028 ▪ www.mumbaiplusnews.in
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* असली लोगो */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="मुंबई प्लस - मुंबई की आवाज़"
              width={450}
              height={120}
              className="h-28 w-auto"
              priority
            />
          </Link>

          {/* डेस्कटॉप मेनू */}
          <nav className="hidden lg:flex items-center space-x-1">
            {['होम', 'मुंबई', 'वार्ड न्यूज़', 'भ्रष्टाचार एक्सपोज़', 'रिपोर्टर बनें', 'ई-पेपर', 'संपर्क'].map((item) => (
              <Link
                key={item}
                href="/"
                className="px-5 py-4 bg-mp-red text-white hover:bg-mp-dark font-bold text-lg transition whitespace-nowrap"
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* <GoogleTranslator /> */}
            <button className="bg-mp-gold text-mp-dark px-6 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg">
              रिपोर्टर बनें
            </button>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-10 h-10 text-mp-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* मोबाइल मेनू */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-mp-red">
            <nav className="flex flex-col">
              {['होम', 'वार्ड न्यूज़', 'भ्रष्टाचार एक्सपोज़', 'रिपोर्टर बनें', 'ई-पेपर'].map((item) => (
                <Link key={item} href="/" className="py-4 px-6 text-white hover:bg-mp-dark font-bold text-xl">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}