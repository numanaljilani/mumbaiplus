import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

// This would typically come from your API or database
const newsData = {
  '1': {
    id: 1,
    title: "Global Summit Addresses Climate Change Crisis with New Commitments",
    excerpt: "World leaders unite to tackle the pressing climate crisis with unprecedented agreements and funding.",
    content: `
      <p>In a landmark gathering of international leaders, the Global Climate Summit concluded today with groundbreaking commitments to address the escalating climate crisis. The summit, held in Geneva, brought together representatives from 195 countries to discuss urgent measures to combat global warming.</p>

      <p>The conference opened with a stark warning from UN Secretary-General Antonio Guterres, who stated, "We are on the brink of climate catastrophe. The time for half-measures is over. We need bold, immediate action from every nation."</p>

      <h2>Key Agreements Reached</h2>
      
      <p>Among the significant outcomes of the summit:</p>
      
      <ul>
        <li><strong>Carbon Neutrality Pledge:</strong> 150 countries committed to achieving net-zero carbon emissions by 2050</li>
        <li><strong>Climate Funding:</strong> Developed nations pledged $100 billion annually to support climate initiatives in developing countries</li>
        <li><strong>Renewable Energy:</strong> Agreement to triple global renewable energy capacity by 2035</li>
        <li><strong>Deforestation:</strong> Commitment to end deforestation by 2030, backed by $19 billion in funding</li>
      </ul>

      <h2>Scientific Consensus</h2>

      <p>Leading climate scientists presented compelling evidence showing that current efforts are insufficient to meet the Paris Agreement targets. Dr. Elena Martinez, lead researcher at the Climate Research Institute, emphasized the urgency:</p>

      <blockquote>
        "Our data shows we have less than seven years to make significant changes before we reach irreversible tipping points. The decisions made at this summit could determine the future of our planet."
      </blockquote>

      <h2>Industry Response</h2>

      <p>Major corporations including tech giants and energy companies announced their own climate initiatives. Amazon revealed plans to power all operations with renewable energy by 2025, five years ahead of their original schedule.</p>

      <p>Meanwhile, automotive manufacturers committed to phasing out internal combustion engines by 2035 in major markets, accelerating the transition to electric vehicles.</p>

      <h2>Youth Activism</h2>

      <p>The summit featured prominent youth climate activists who demanded more ambitious targets. "This is our future at stake," said 18-year-old activist Sarah Chen. "We need action, not promises."</p>

      <p>As the summit concluded, world leaders expressed optimism about the progress made while acknowledging the challenges ahead. The next review of commitments is scheduled for 2026.</p>
    `,
    image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "World News",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    publishDate: "December 10, 2024",
    readTime: "8 min read",
    tags: ["Climate Change", "Environment", "Politics", "Global Summit"]
  },
  '2': {
    id: 2,
    title: "Tech Giants Announce Breakthrough in AI Technology That Could Revolutionize Healthcare",
    excerpt: "Major advancements in artificial intelligence are set to transform medical diagnostics and treatment.",
    content: `
      <p>In a joint announcement today, leading technology companies revealed a groundbreaking artificial intelligence system that promises to revolutionize healthcare diagnostics and treatment planning.</p>

      <p>The new AI platform, developed through a collaboration between Google Health, Microsoft Healthcare, and several research institutions, has demonstrated unprecedented accuracy in early disease detection.</p>

      <h2>Revolutionary Capabilities</h2>
      
      <p>The AI system showcases several remarkable features:</p>
      
      <ul>
        <li><strong>Early Cancer Detection:</strong> 98% accuracy in identifying early-stage cancers from medical imaging</li>
        <li><strong>Personalized Treatment:</strong> Ability to recommend customized treatment plans based on genetic data</li>
        <li><strong>Drug Discovery:</strong> Accelerates new drug development by predicting molecular interactions</li>
        <li><strong>Remote Diagnostics:</strong> Enables accurate diagnosis in underserved areas through telemedicine</li>
      </ul>

      <h2>Clinical Trial Results</h2>

      <p>In extensive clinical trials involving over 50,000 patients across 12 countries, the system demonstrated remarkable performance:</p>

      <blockquote>
        "We've never seen anything like this. The AI detected pancreatic cancer an average of two years earlier than conventional methods, potentially saving thousands of lives annually."
        <footer>— Dr. Michael Chen, Lead Researcher at Stanford Medical</footer>
      </blockquote>

      <h2>Ethical Considerations</h2>

      <p>The development team has implemented robust ethical safeguards, including:</p>

      <ul>
        <li>Transparent decision-making processes</li>
        <li>Bias detection and mitigation systems</li>
        <li>Patient data privacy protection</li>
        <li>Human oversight requirements</li>
      </ul>

      <h2>Implementation Timeline</h2>

      <p>The technology will be rolled out in phases:</p>

      <ul>
        <li><strong>Phase 1 (2024):</strong> Pilot programs in major research hospitals</li>
        <li><strong>Phase 2 (2025):</strong> Expansion to regional medical centers</li>
        <li><strong>Phase 3 (2026):</strong> Global deployment with focus on developing nations</li>
      </ul>

      <p>Healthcare providers have expressed excitement about the potential impact. "This represents the most significant advancement in medical technology since the MRI machine," said Dr. Emily Rodriguez, Chief Medical Officer at Mayo Clinic.</p>

      <p>The companies involved have committed to making the technology accessible to healthcare providers worldwide, with special pricing for developing countries and non-profit organizations.</p>
    `,
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    category: "Technology",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    publishDate: "December 9, 2024",
    readTime: "6 min read",
    tags: ["AI", "Healthcare", "Technology", "Innovation"]
  },
  '3': {
    id: 3,
    title: "National Team Wins Championship After Dramatic Final Match",
    excerpt: "In an unforgettable showdown, the underdogs clinch victory in the last seconds of the championship game.",
    content: `
      <p>In one of the most dramatic finishes in sports history, the National Tigers secured the championship title with a last-second victory that left fans breathless and cemented the game as an instant classic.</p>

      <p>The final match, played before a sold-out crowd of 85,000 spectators, saw the underdog Tigers overcome a 14-point deficit in the fourth quarter to defeat the defending champions.</p>

      <h2>The Game-Changing Moment</h2>
      
      <p>With only 3 seconds remaining on the clock and trailing by 2 points, rookie quarterback Alex Johnson connected with veteran receiver Marcus Williams for a 45-yard touchdown pass that will be remembered for generations.</p>

      <blockquote>
        "I saw Marcus break free and just threw it as far as I could. When he caught it, time just stopped. This is why we play the game."
        <footer>— Alex Johnson, Tigers Quarterback</footer>
      </blockquote>

      <h2>Team Resilience</h2>

      <p>The Tigers' victory was a testament to their perseverance throughout the season:</p>

      <ul>
        <li>Overcame a 2-5 start to the season</li>
        <li>Won 8 consecutive games to reach the playoffs</li>
        <li>Defeated the top three ranked teams in the postseason</li>
        <li>First championship in 25 years for the franchise</li>
      </ul>

      <h2>Coach's Leadership</h2>

      <p>Head coach Sarah Martinez, in her second season with the team, was instrumental in the turnaround. "These players never quit," Martinez said during the post-game celebration. "They believed in each other when nobody else did."</p>

      <h2>Historical Significance</h2>

      <p>The victory marks several historical achievements:</p>

      <ul>
        <li>Youngest quarterback to win a championship (21 years old)</li>
        <li>Largest fourth-quarter comeback in championship history</li>
        <li>First team to win championship after being last in their division mid-season</li>
        <li>Record-breaking merchandise sales within 24 hours of victory</li>
      </ul>

      <h2>Celebrations and Impact</h2>

      <p>The city erupted in celebration following the victory, with an estimated 2 million fans attending the victory parade. Local businesses reported record sales, and tourism officials anticipate significant economic impact from the championship.</p>

      <p>"This victory means more than just a trophy," said Mayor Johnson. "It's brought our community together and shown what's possible through hard work and determination."</p>

      <p>The team will begin their title defense in the spring, with expectations higher than ever. But for now, the city and its team are enjoying a well-deserved celebration.</p>
    `,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    category: "Sports",
    author: "David Martinez",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    publishDate: "December 8, 2024",
    readTime: "5 min read",
    tags: ["Sports", "Championship", "Football", "Victory"]
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const news = newsData[params.id];
  
  if (!news) {
    return {
      title: 'News Not Found - NewsHub',
    };
  }

  return {
    title: `${news.title} - NewsHub`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [news.image],
      type: 'article',
    },
  };
}

export default function NewsDetail({ params }) {
  const news = newsData[params.id];

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">News Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-blue-800">Home</Link>
            <span>›</span>
            <Link href="#" className="hover:text-blue-800">{news.category}</Link>
            <span>›</span>
            <span className="text-gray-400">Article</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                {news.category}
              </span>
              <span className="text-gray-500">{news.publishDate}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{news.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {news.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src={news.authorImage} 
                alt={news.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{news.author}</p>
                <p className="text-gray-500">Senior Correspondent</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Photo credit: Unsplash
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {news.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share */}
          <div className="border-t border-b border-gray-200 py-6 mb-12">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Share this article:</span>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'WhatsApp'].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <span className="sr-only">Share on {platform}</span>
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="flex items-start space-x-4">
              <img 
                src={news.authorImage} 
                alt={news.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {news.author}</h3>
                <p className="text-gray-600">
                  {news.author} is a senior correspondent with over 10 years of experience in {news.category.toLowerCase()} journalism. 
                  Their work has been recognized with multiple awards for excellence in reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(newsData)
                .filter(article => article.id !== news.id && article.category === news.category)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link 
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.id}`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-blue-800 text-sm font-medium">{relatedArticle.category}</span>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{relatedArticle.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedArticle.excerpt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* Newsletter Subscription */}
          <div className="bg-blue-800 text-white rounded-lg p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 opacity-90">
              Get the latest news delivered straight to your inbox. No spam, just quality journalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return Object.keys(newsData).map((id) => ({
    id: id,
  }));
}