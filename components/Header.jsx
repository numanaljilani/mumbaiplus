'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // मेनू आइटम्स — category वाले → /news?category=, बाकी अलग पेज
const menuItems = [
  { label: 'होम', category: 'home' },
  { label: 'मुंबई', category: 'mumbai' },
  { label: 'महाराष्ट्र', category: 'maharashtra' },
  { label: 'गेम्स', category: 'games' },

  // Static pages
  { label: 'ई-पेपर', href: '/epaper' },
  { label: 'हमारे बारे में', href: '/about' },
  { label: 'संपर्क करें', href: '/contact' },

  // Button item
  { label: 'मेम्बर बनें', href: '/member', isButton: true }
];

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50">

      {/* टॉप पिंक लाइन */}
      <div className="h-2 bg-[#ee73c4]"></div>

      {/* बॉटम पिंक बॉर्डर */}
      <div className="border-b-8 border-[#ee73c4]">

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            {/* लोगो */}
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
              {menuItems.map((item) => {
                // अगर category है → /news?category=...
                if (item.category) {
                  return (
                    <Link
                      key={item.label}
                      href={`/news?category=${item.category}`}
                      className="px-5 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  );
                }

                // अगर href है (ई-पेपर या मेम्बर)
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`${
                      item.isButton
                        ? 'bg-[#ee73c4] text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg'
                        : 'px-5 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition'
                    } whitespace-nowrap`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* मोबाइल हैमबर्गर */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="मेनू खोलें"
            >
              <svg className="w-10 h-10 text-[#ee73c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* मोबाइल मेनू */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 bg-[#ee73c4] mt-2 rounded-lg">
              <nav className="flex flex-col">
                {menuItems.map((item) => {
                  const linkProps = item.category
                    ? { href: `/news?category=${item.category}` }
                    : { href: item.href };

                  return (
                    <Link
                      key={item.label}
                      {...linkProps}
                      onClick={() => setIsMenuOpen(false)}
                      className={`py-4 px-6 text-white hover:bg-pink-600 font-bold text-xl transition ${
                        item.isButton ? 'bg-pink-600 rounded-full mx-4 mt-2' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}