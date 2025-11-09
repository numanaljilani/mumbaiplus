"use client"
const NewsCard = ({ title, excerpt, image, date, category }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src={image} 
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-medium text-primary bg-blue-100 px-2 py-1 rounded">
          {category}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-sm line-clamp-3">{excerpt}</p>
      <button className="mt-4 text-primary hover:text-blue-700 font-medium text-sm">
        Read More →
      </button>
    </div>
  </div>
)

export default function NewsCategory({ title, news }) {
  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-3">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}