// app/page.jsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import NewsCategory from '../components/NewsCategory';
import Footer from '../components/Footer';
import Link from 'next/link';
import { server } from '../contants';

// हिंदी → इंग्लिश कैटेगरी मैप
const categoryHindiMap = {
  politics: 'राजनीति',
  tech: 'तकनीक',
  corruption: 'भ्रष्टाचार',
  water: 'पानी',
  roads: 'सड़क',
  illegal_construction: 'अवैध निर्माण',
  bmc: 'BMC',
  health: 'स्वास्थ्य',
  education: 'शिक्षा',
  crime: 'अपराध',
  other: 'अन्य',
};

export default function Home() {
  const [breakingNews, setBreakingNews] = useState([]);
  const [wardNews, setWardNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // यूज़र चेक
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // डेटा फेच
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [breakingRes, wardRes] = await Promise.all([
          fetch(`${server}/api/posts?category=politics,corruption,crime&limit=10`),
          fetch(`${server}/api/posts?limit=10`),
        ]);

        const breakingData = await breakingRes.json();
        const wardData = await wardRes.json();
        console.log(wardData)

        setBreakingNews(breakingData.posts || []);
        setWardNews(wardData.posts || []);
      } catch (err) {
        setError('खबरें लोड करने में समस्या');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // लोडिंग
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-700 font-bold text-lg">खबरें लोड हो रही हैं...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-mumbai">
      <Header />

      {/* ब्रेकिंग न्यूज़ टिकर */}
      <section className="bg-blue-400 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="bg-white text-red-500 px-3 py-1 rounded font-bold text-sm whitespace-nowrap">
              ब्रेकिंग
            </span>
            <div className="flex animate-marquee">
              {breakingNews.length > 0 ? (
                breakingNews.map((news, i) => (
                  <p key={news._id} className="text-base font-medium whitespace-nowrap">
                    {i > 0 && ' • '}
                    {news.heading}
                  </p>
                ))
              ) : (
                <p className="text-base font-medium">कोई ब्रेकिंग न्यूज़ नहीं</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <HeroSlider />

        {/* मिशन सेक्शन */}
        {/* <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 my-12 border-t-8 border-blue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-800">
            मुंबई प्लस — मुंबई की आवाज़, अब हर दिन आपके साथ!
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            2009 से मुंबई की जमीनी हकीकत को बेखौफ़ आवाज़ देने वाला{' '}
            <strong className="text-blue-700">मुंबई प्लस</strong> अब{' '}
            <span className="text-blue-600 font-bold">दैनिक समाचार पत्र</span> के रूप में आपके सामने है। 
            अवैध निर्माण, भ्रष्टाचार, जनसमस्याएँ — अब कोई भी मुद्दा दब नहीं सकेगा!
          </p>
          <div className="text-center mt-8">
            {user ? (
              <Link
                href="/upload"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg md:text-xl font-bold transition transform hover:scale-105"
              >
                नई खबर अपलोड करें
              </Link>
            ) : (
              <Link
                href="/register-reporter"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg md:text-xl font-bold transition transform hover:scale-105"
              >
                रिपोर्टर बनें – अपनी खबर खुद भेजें
              </Link>
            )}
          </div>
        </div> */}

        {/* कैटेगरी वाइज़ न्यूज़ */}
        {/* <NewsCategory
          title="आज की बड़ी खबरें"
          news={breakingNews.map((n) => ({
            ...n,
            category: categoryHindiMap[n.category] || n.category,
          }))}
        /> */}

        <NewsCategory
          title="आज की बड़ी खबरें"
          news={wardNews.map((n) => ({
            ...n,
            category: n.ward || 'मुंबई',
          }))}
        />
      </main>

      <Footer />
    </div>
  );
}