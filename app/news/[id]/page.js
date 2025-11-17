// app/news/[id]/page.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

export default async function NewsDetail({ params }) {
  const { id } = await params;
  console.log(id , "ID")

  // API से डेटा फेच (localhost:5000)
  let news = null;
  try {
    const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('News not found');
    news = await res.json();
    console.log(news , ">>>")
  } catch (err) {
    console.error('Fetch error:', err);
    notFound();
  }

  if (!news || !news._id) notFound();

  const hindiCategory = categoryHindiMap[news.category] || news.category;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-mumbai">
      <Header />

      <main className="py-8">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-blue-700 mb-8">
            <Link href="/" className="hover:underline">होम</Link>
            <span>›</span>
            <Link href={`/category/${news.category}`} className="hover:underline">
              {hindiCategory}
            </Link>
            <span>›</span>
            <span className="text-blue-500">खबर</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4 text-sm">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold">
                {hindiCategory}
              </span>
              <span className="text-blue-600">
                {new Date(news.createdAt).toLocaleDateString('hi-IN')}
              </span>
              <span className="text-blue-600">•</span>
              <span className="text-blue-600">{news.readTime || '5 मिनट'}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {news.title}
            </h1>

            <p className="text-lg md:text-xl text-blue-700 mb-8 leading-relaxed">
              {news.description?.substring(0, 200)}...
            </p>

            {/* Reporter Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-xl">
                {news?.userId?.name?.[0] || 'R'}
              </div>
              <div>
                <p className="font-bold text-blue-900">{news?.userId?.name || 'मुंबई प्लस टीम'}</p>
                <p className="text-sm text-blue-600">
                  रिपोर्टर • {news?.userId?.ward || 'मुंबई'}
                </p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {news.image && (
            <div className="mb-8">
              <img
                src={news.image}
                alt={news.title}
                width={1200}
                height={600}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                priority
              />
              <p className="text-xs text-blue-600 mt-2 text-center">
                फोटो: {news.reporterName || 'रिपोर्टर'}
              </p>
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 text-blue-900 leading-relaxed">
            <div
              dangerouslySetInnerHTML={{ __html: news.content || news.description }}
              className="space-y-4"
            />
          </div>

          {/* Tags */}
          {Array.isArray(news.tags) && news.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {news.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Social Share */}
          <div className="border-t border-b border-blue-200 py-6 mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-blue-800 font-bold">इस खबर को शेयर करें:</span>
              <div className="flex gap-3">
                {['WhatsApp', 'Facebook', 'Twitter'].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition"
                    aria-label={`Share on ${platform}`}
                  >
                    <span className="text-blue-700 text-xs font-bold">{platform[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reporter Bio */}
          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-2xl">
                {news.reporterName?.[0] || 'R'}
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  रिपोर्टर: {news.reporterName || 'मुंबई प्लस'}
                </h3>
                <p className="text-blue-700">
                  {news.ward && `${news.ward} से ग्राउंड रिपोर्टिंग। `}
                  मोबाइल: <span className="font-bold">{news.mobile || '9594939595'}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Related News */}
          {news.related && news.related.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                इसी कैटेगरी की अन्य खबरें
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {news.related.slice(0, 2).map((related) => (
                  <Link
                    key={related._id}
                    href={`/news/${related._id}`}
                    className="block bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                  >
                    {related.image && (
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-4">
                      <span className="text-blue-600 text-sm font-bold">
                        {categoryHindiMap[related.category] || related.category}
                      </span>
                      <h3 className="font-bold text-lg text-blue-900 mt-1 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-blue-700 text-sm mt-2 line-clamp-2">
                        {related.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Newsletter */}
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">रोज़ की खबरें सीधे इनबॉक्स में</h3>
            <p className="mb-6 text-blue-100">
              मुंबई की हर खबर, हर वार्ड से — बिना स्पैम, सिर्फ़ सच्चाई।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="आपका ईमेल"
                className="flex-1 px-4 py-3 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                सब्सक्राइब करें
              </button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

// SEO मेटाडेटा
export async function generateMetadata({ params }) {
  let news = null;
  try {
    const res = await fetch(`http://localhost:5000/api/posts/${params.id}`, {
      cache: 'no-store',
    });
    if (res.ok) news = await res.json();
  } catch (err) {
    console.error('Metadata fetch error:', err);
  }

  if (!news) {
    return {
      title: 'खबर नहीं मिली - मुंबई प्लस',
      description: 'यह खबर उपलब्ध नहीं है।',
    };
  }

  return {
    title: `${news.title} - मुंबई प्लस`,
    description: news.description?.substring(0, 160) || 'मुंबई प्लस की ताज़ा खबर',
    openGraph: {
      title: news.title,
      description: news.description,
      images: news.image ? [news.image] : [],
      type: 'article',
      publishedTime: news.createdAt,
    },
  };
}