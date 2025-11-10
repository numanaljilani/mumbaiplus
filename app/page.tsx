// app/page.tsx
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import NewsCategory from '../components/NewsCategory';
import Footer from '../components/Footer';
import Image from 'next/image';

const breakingNews = [
  {
    id: 1,
    title: "दादर में अवैध हॉकर ज़ोन हटाने की मांग तेज़",
    excerpt: "स्थानीय नागरिकों ने BMC पर लगाया पक्षपात का आरोप, आज शाम धरना",
    image: "/images/dadar-hawkers.jpg",
    date: "15 मिनट पहले",
    category: "दादर"
  },
  {
    id: 2,
    title: "अंधेरी ईस्ट में पानी की भारी किल्लत, लोग टैंकर पर निर्भर",
    excerpt: "पिछले 5 दिनों से नल में पानी नहीं, BMC अधिकारी मौन",
    image: "/images/andheri-water.jpg",
    date: "1 घंटा पहले",
    category: "अंधेरी"
  },
  {
    id: 3,
    title: "घाटकोपर में नया फ्लाईओवर 6 महीने देरी से खुलेगा",
    excerpt: "ठेकेदार पर लगे भ्रष्टाचार के आरोप, जांच शुरू",
    image: "/images/ghatkopar-flyover.jpg",
    date: "2 घंटे पहले",
    category: "घाटकोपर"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-mumbai">
      <Header />
      
      {/* हीरो सेक्शन - ब्रेकिंग न्यूज़ */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 animate-pulse">
            <span className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm">ब्रेकिंग</span>
            <p className="text-lg font-bold">
              दादर में अवैध हॉकर ज़ोन हटाने की मांग तेज़ • अंधेरी में पानी संकट गहराया • घाटकोपर फ्लाईओवर में भ्रष्टाचार का खुलासा
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <HeroSlider />

        {/* मुंबई प्लस मिशन */}
        <div className="bg-white rounded-xl shadow-lg p-8 my-12 border-t-8 border-red-600">
          <h2 className="text-4xl font-bold text-center mb-6 text-red-600 font-bold-hindi">
            मुंबई प्लस — मुंबई की आवाज़, अब हर दिन आपके साथ!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            2009 से मुंबई की जमीनी हकीकत को बेखौफ़ आवाज़ देने वाला <strong>मुंबई प्लस</strong> अब 
            <span className="text-red-600 font-bold"> दैनिक समाचार पत्र </span> के रूप में आपके सामने है। 
            अवैध निर्माण, भ्रष्टाचार, जनसमस्याएँ — अब कोई भी मुद्दा दब नहीं सकेगा!
          </p>
          <div className="text-center mt-8">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition">
              रिपोर्टर बनें – अपनी खबर खुद भेजें
            </button>
          </div>
        </div>

        <NewsCategory title="आज की बड़ी खबरें" news={breakingNews} />
        <NewsCategory title="वार्ड विशेष" news={breakingNews} />
      </main>

      <Footer />
    </div>
  );
}