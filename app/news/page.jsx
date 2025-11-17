'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

// English → Hindi कैटेगरी मैप (Header में इस्तेमाल होने वाले)
const categoryMap = {
  home: 'होम',
  mumbai: 'मुंबई',
  maharashtra: 'महाराष्ट्र',
  games: 'गेम्स',
};

// सभी टैब्स (Header से मैच)
const allCategories = [
  { key: 'home', label: 'होम' },
  { key: 'mumbai', label: 'मुंबई' },
  { key: 'maharashtra', label: 'महाराष्ट्र' },
  { key: 'games', label: 'गेम्स' },
];

export default function NewsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'home'; // डिफ़ॉल्ट होम

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // टैब क्लिक → URL अपडेट + डेटा फेच
  const handleTabClick = (key) => {
    if (key === currentCategory) return;

    // URL अपडेट करें (शेलो राउटिंग)
    router.push(`/news?category=${key}`, { scroll: false });
  };

  // डेटा फेच फंक्शन
  const fetchPosts = async (category) => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(
        `http://localhost:5000/api/posts?category=${category}&limit=20`,
        { cache: 'no-store' }
      );

      if (!res.ok) throw new Error('Failed to fetch posts');

      const data = await res.json();
      setPosts(data.posts || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // जब category बदले → डेटा फेच करें
  useEffect(() => {
    fetchPosts(currentCategory);
  }, [currentCategory]);

  const pageTitle = categoryMap[currentCategory] || 'न्यूज़';

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="py-6 md:py-8">
        <div className="container mx-auto px-4">

          {/* स्क्रॉलेबल टैब्स */}
          <div className="overflow-x-auto scrollbar-hide mb-8 border-b-2 border-gray-200">
            <div className="flex gap-3 whitespace-nowrap pb-2">
              {allCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleTabClick(cat.key)}
                  className={`px-6 py-3 rounded-t-lg font-bold text-lg transition-all relative ${
                    currentCategory === cat.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-300'
                  }`}
                >
                  {cat.label}
                  {currentCategory === cat.key && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#ee73c4]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* पेज टाइटल */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center md:text-left">
            {pageTitle} की ताज़ा खबरें
          </h1>

          {/* लोडिंग */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* एरर */}
          {error && !loading && (
            <div className="text-center py-16 bg-red-50 rounded-xl border border-red-200">
              <p className="text-red-700 text-lg font-bold">खबरें लोड नहीं हो सकीं</p>
              <button
                onClick={() => fetchPosts(currentCategory)}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                फिर से कोशिश करें
              </button>
            </div>
          )}

          {/* कोई खबर नहीं */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <p className="text-xl font-bold text-gray-700">इस सेक्शन में अभी कोई खबर नहीं है</p>
              <p className="text-gray-600 mt-2">जल्द ही अपडेट होगा!</p>
            </div>
          )}

          {/* न्यूज़ ग्रिड */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/news/${post._id}`}
                  className="block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.heading || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <span className="absolute bottom-2 left-2 bg-[#ee73c4] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {categoryMap[post.category] || post.category || 'न्यूज़'}
                      </span>
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-700 transition">
                      {post.heading || post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                      <span>{new Date(post.createdAt).toLocaleDateString('hi-IN')}</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime || '5'} मिनट
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}