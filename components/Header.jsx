// components/Header.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.clear();
      }
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);
    router.push('/');
  };

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50">
      <div className="h-2 bg-[#ee73c4]"></div>

      <div className="border-b-8 border-[#ee73c4]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="मुंबई प्लस"
                width={450}
                height={120}
                className="h-24 md:h-28 w-auto"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">

              <Link href="/" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                होम
              </Link>
              <Link href="/news?category=mumbai" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                मुंबई
              </Link>
              <Link href="/news?category=maharashtra" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                महाराष्ट्र
              </Link>
              <Link href="/news?category=games" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                गेम्स
              </Link>
              <Link href="/epaper" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                ई-पेपर
              </Link>
              <Link href="/about" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                हमारे बारे में
              </Link>
              <Link href="/contact" className="px-6 py-4 bg-[#ee73c4] text-white hover:bg-pink-600 font-bold text-lg transition">
                संपर्क करें
              </Link>

              {/* यूज़र लॉगिन है → Avatar Dropdown */}
              {user ? (
                <div className="relative ml-6" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 bg-white border-4 border-[#ee73c4] rounded-full px-5 py-2 hover:shadow-xl transition transform hover:scale-105"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ee73c4] to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {user.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <span className="font-bold text-[#ee73c4] hidden xl:block">
                      {user.name || user.email}
                    </span>
                    <svg className={`w-5 h-5 text-[#ee73c4] transition ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border-2 border-[#ee73c4] overflow-hidden animate-in fade-in slide-in-from-top-2">
                      <div className="p-4 bg-gradient-to-r from-[#ee73c4] to-pink-600 text-white">
                        <p className="text-sm opacity-90">नमस्ते,</p>
                        <p className="font-bold text-lg">{user.name || user.email}</p>
                        <p className="text-xs opacity-80">{user.role === 'admin' ? 'एडमिन' : 'रिपोर्टर'}</p>
                      </div>

                      <div className="py-2">
                        <Link
                          href="/dashboard"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-6 py-3 hover:bg-pink-50 font-medium text-gray-800 flex items-center gap-3"
                        >
                          मेरा डैशबोर्ड
                        </Link>

                        <Link
                          href="/my-posts"
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-6 py-3 hover:bg-pink-50 font-medium text-gray-800 flex items-center gap-3"
                        >
                          मेरी पोस्ट्स
                        </Link>

                        {user.role === 'admin' && (
                          <Link
                            href="/admin/epaper"
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-6 py-3 hover:bg-green-50 font-bold text-green-700 flex items-center gap-3 border-t border-gray-200"
                          >
                            E-Paper डैशबोर्ड
                          </Link>
                        )}

                        <div className="border-t-2 border-gray-200 mt-2 pt-2">
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-6 py-3 hover:bg-red-50 text-red-600 font-bold flex items-center gap-3"
                          >
                            लॉगआउट
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* लॉगिन नहीं → मेम्बर बनें */
                <Link
                  href="/member"
                  className="ml-6 bg-gradient-to-r from-[#ee73c4] to-pink-600 text-white px-10 py-4 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition shadow-xl"
                >
                  मेम्बर बनें
                </Link>
              )}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#ee73c4]"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#ee73c4] rounded-b-3xl pb-6">
            <nav className="px-6 space-y-3 pt-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-3 text-white font-bold text-xl hover:bg-pink-600 rounded-lg">होम</Link>
              <Link href="/epaper" onClick={() => setIsMenuOpen(false)} className="block py-3 text-white font-bold text-xl hover:bg-pink-600 rounded-lg">ई-पेपर</Link>

              {user ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="block py-4 bg-blue-600 text-white font-bold text-xl rounded-full text-center">मेरा डैशबोर्ड</Link>
                  <Link href="/my-posts" onClick={() => setIsMenuOpen(false)} className="block py-4 bg-purple-600 text-white font-bold text-xl rounded-full text-center">मेरी पोस्ट्स</Link>
                  {user.role === 'admin' && (
                    <Link href="/admin/epaper" onClick={() => setIsMenuOpen(false)} className="block py-4 bg-green-600 text-white font-bold text-xl rounded-full text-center">E-Paper डैशबोर्ड</Link>
                  )}
                  <button onClick={handleLogout} className="w-full py-4 bg-red-600 text-white font-bold text-xl rounded-full">लॉगआउट</button>
                </>
              ) : (
                <Link href="/member" onClick={() => setIsMenuOpen(false)} className="block py-5 bg-white text-[#ee73c4] font-bold text-2xl rounded-full text-center shadow-2xl">
                  मेम्बर बनें
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}