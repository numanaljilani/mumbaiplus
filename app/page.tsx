import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import NewsCategory from '../components/NewsCategory'
import Footer from '../components/Footer'

// Sample news data
const sampleNews = [
  {
    title: "New Economic Policy Changes Market Dynamics",
    excerpt: "The government's latest economic policy is set to transform market dynamics across multiple sectors, creating new opportunities for investors.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2 hours ago",
    category: "Business"
  },
  {
    title: "Revolutionary Medical Breakthrough in Cancer Treatment",
    excerpt: "Scientists announce a groundbreaking treatment that shows promising results in early-stage trials, offering new hope for patients.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "4 hours ago",
    category: "Health"
  },
  {
    title: "Major Sports League Announces Expansion Teams",
    excerpt: "The league commissioner confirmed the addition of two new teams, marking the first expansion in over a decade.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "6 hours ago",
    category: "Sports"
  }
]

const trendingNews = [
  {
    title: "Climate Activists Rally Worldwide for Action",
    excerpt: "Millions of people across the globe participate in coordinated protests demanding immediate climate action from world leaders.",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "1 hour ago",
    category: "Environment"
  },
  {
    title: "Tech Conference Reveals Future of AI",
    excerpt: "Industry leaders showcase revolutionary AI applications that could transform everyday life in the coming years.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "3 hours ago",
    category: "Technology"
  },
  {
    title: "Film Festival Awards Celebrated Directors",
    excerpt: "The annual international film festival concludes with surprise wins and standing ovations for emerging filmmakers.",
    image: "https://images.unsplash.com/photo-1489599809505-7c8e1c75cd98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    date: "5 hours ago",
    category: "Entertainment"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <div className="py-8">
          <NewsCategory title="Latest News" news={sampleNews} />
          <NewsCategory title="Trending Stories" news={trendingNews} />
        </div>
      </main>
      <Footer />
    </div>
  )
}