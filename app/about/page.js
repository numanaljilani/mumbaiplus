import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - NewsHub</title>
        <meta name="description" content="Learn more about NewsHub - Your trusted news source" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-12">
          {/* Hero Section */}
          <div className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About NewsHub</h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Your trusted source for accurate, timely, and comprehensive news coverage from around the world.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  At NewsHub, we believe in the power of information to transform lives and shape societies. 
                  Our mission is to deliver unbiased, fact-based journalism that empowers our readers to make informed decisions.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  We are committed to upholding the highest standards of journalistic integrity, ensuring that 
                  every story we publish is thoroughly researched and verified.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-gray-700 italic">
                    "In a world of information overload, we strive to be your trusted guide, 
                    separating signal from noise and delivering what truly matters."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Newsroom" 
                  className="rounded-lg shadow-md h-48 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Journalism" 
                  className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Accuracy</h3>
                  <p className="text-gray-600">
                    We verify every piece of information from multiple sources before publication to ensure factual correctness.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-gray-600">
                    We maintain editorial independence and avoid conflicts of interest in our reporting.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                  <p className="text-gray-600">
                    We bring you diverse viewpoints and comprehensive coverage from around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Editor-in-Chief', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
                { name: 'Michael Chen', role: 'Senior Correspondent', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
                { name: 'Emma Davis', role: 'Technology Editor', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
                { name: 'David Martinez', role: 'Foreign Affairs Analyst', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  )
}