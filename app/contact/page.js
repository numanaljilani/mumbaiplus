// app/contact/page.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'संपर्क करें - मुंबई प्लस | आपकी आवाज़ तक पहुँचें',
  description: 'मुंबई प्लस से संपर्क करें। खबर भेजें, शिकायत दर्ज करें, विज्ञापन या सदस्यता के लिए बात करें।',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-mumbai">
      <Header />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* हीरो सेक्शन */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#ee73c4] mb-6">
              संपर्क करें
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              आपकी खबर, आपकी शिकायत, आपकी आवाज़ — हमें भेजें।<br />
              हम 24 घंटे के अंदर जवाब देंगे!
            </p>
          </section>

          {/* मुख्य कॉन्टैक्ट कार्ड्स */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            {/* खबर भेजें */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:shadow-3xl transition">
              <div className="text-6xl mb-4">News</div>
              <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">खबर भेजें</h3>
              <p className="text-gray-600 mb-6">
                अपने वार्ड की खबर, फोटो, वीडियो या घटना हमारे साथ शेयर करें
              </p>
              <div className="space-y-4">
                <Link
                  href="https://wa.me/919594939595?text=नमस्ते%20मुंबई%20प्लस!%20मैं%20अपने%20इलाके%20की%20खबर%20भेज%20रहा/रही%20हूँ..."
                  target="_blank"
                  className="block bg-green-500 text-white py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg"
                >
                  WhatsApp पर भेजें
                </Link>
                <Link
                  href="mailto:mumbaiplusnews@gmail.com?subject=खबर%20भेजी%20गई"
                  className="block bg-blue-600 text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg"
                >
                  ईमेल करें
                </Link>
              </div>
            </div>

            {/* शिकायत / भ्रष्टाचार */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:shadow-3xl transition border-4 border-[#ee73c4]">
              <div className="text-6xl mb-4">Complaint</div>
              <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">शिकायत दर्ज करें</h3>
              <p className="text-gray-600 mb-6">
                पानी, सड़क, कचरा, अवैध निर्माण, भ्रष्टाचार — कोई भी समस्या
              </p>
              <div className="space-y-4">
                <Link
                  href="https://wa.me/919594939595?text=नमस्ते!%20मैं%20अपने%20इलाके%20में%20हो%20रही%20समस्या%20की%20शिकायत%20करना%20चाहता/चाहती%20हूँ..."
                  target="_blank"
                  className="block bg-red-500 text-white py-4 rounded-full font-bold text-lg hover:bg-red-600 transition shadow-lg"
                >
                  WhatsApp पर शिकायत करें
                </Link>
                <p className="text-3xl font-bold text-[#ee73c4] pt-4">
                  9594939595
                </p>
              </div>
            </div>

            {/* सदस्यता / विज्ञापन */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 text-center hover:shadow-3xl transition">
              <div className="text-6xl mb-4">Subscription</div>
              <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">सदस्यता / विज्ञापन</h3>
              <p className="text-gray-600 mb-6">
                मेंबर बनें, ई-पेपर, प्रिंट सब्सक्रिप्शन या विज्ञापन बुक करें
              </p>
              <div className="space-y-4">
                <Link
                  href="/member"
                  className="block bg-[#ee73c4] text-white py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-lg"
                >
                  मेंबर बनें
                </Link>
                <Link
                  href="tel:9594939595"
                  className="block bg-purple-600 text-white py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition shadow-lg"
                >
                  कॉल करें: 9594939595
                </Link>
              </div>
            </div>
          </div>

          {/* कार्यालय पता */}
          <section className="bg-gradient-to-r from-[#ee73c4]/10 to-pink-100 rounded-3xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ee73c4] mb-8">
              हमारा कार्यालय
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-800 space-y-4">
              <p className="text-xl font-bold">मुंबई प्लस न्यूज़</p>
              <p>
                ओम शिव साई सीएचएस, ए-06,<br />
                नियर रुनवाल एंड ओमकार एस्क्वायर,<br />
                सायन (पूर्व), मुंबई - 400022<br />
                महाराष्ट्र, भारत
              </p>
              <p className="text-xl font-bold text-[#ee73c4] pt-4">
                RNI: MAHHI/2009/28028
              </p>
            </div>

            {/* Google Maps Embed (ऑप्शनल) */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.173!2d72.8791!3d19.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21d6d0e0b7%3A0x9d7e8f2d5e8e8f2d!2sSion%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1730000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="मुंबई प्लस कार्यालय लोकेशन"
              ></iframe>
            </div>
          </section>

          {/* संपादकीय टीम */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-[#ee73c4] mb-8">संपादकीय टीम</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-lg font-bold text-gray-800">संपादक</p>
                <p className="text-2xl font-bold text-[#ee73c4]">मोहम्मद फारुख मेवाती</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <p className="text-lg font-bold text-gray-800">कार्यकारी संपादक</p>
                <p className="text-2xl font-bold text-[#ee73c4]">राजेश यू. जायसवाल</p>
              </div>
            </div>
          </section>

          {/* अंतिम CTA */}
          <section className="text-center mt-16 bg-[#ee73c4] text-white rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              आपकी आवाज़ हमारे लिए मायने रखती है
            </h2>
            <p className="text-xl mb-8">
              कोई भी खबर, कोई भी शिकायत — हमें तुरंत बताएँ<br />
              हम आपकी आवाज़ को मुंबई तक पहुँचाएँगे!
            </p>
            <Link
              href="https://wa.me/919594939595"
              target="_blank"
              className="bg-white text-[#ee73c4] px-12 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 transition shadow-2xl inline-block"
            >
              WhatsApp पर संपर्क करें
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}