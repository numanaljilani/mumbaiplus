// app/member/page.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-mumbai">
      <Header />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* हीरो सेक्शन */}
          <section className="text-center mb-12 md:mb-16">
           
            <h1 className="text-3xl md:text-5xl font-bold text-[#ee73c4] mb-4">
              📢 मुंबई प्लस न्यूज़ – आपकी आवाज़ अब और भी मज़बूत !
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              क्यों जुड़ें मुंबई प्लस न्यूज़ से? आपकी सदस्यता से हमारी आवाज़ और मजबूत होगी।
            </p>
          </section>

          {/* लाभों की लिस्ट */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              क्यों जुड़ें मुंबई प्लस न्यूज़ से?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'आपके वार्ड की हर खबर – सड़क, पानी, सफ़ाई, स्कैम, विकास कार्य, स्कूल–कॉलज, सब पर हमारी पैनी नज़र।',
                'भ्रष्टाचार के खिलाफ आवाज़ – आपकी छोटी शिकायत भी हम सही मंच तक पहुँचाते हैं।',
                'स्थानीय प्रशासन तक सीधी पहुँच – आपकी समस्या को हल करवाने के लिए हमारी टीम लगातार फॉलो-अप करती है।',
                'बिना डर, बिना दबाव – निष्पक्ष पत्रकारिता',
                'आम लोगों की कहानी, आम लोगों की लड़ाई – हम आपके हक़ की बात करते हैं।',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-[#ee73c4]">✔️</span>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* महत्वपूर्ण पैराग्राफ */}
          <section className="bg-gradient-to-r from-[#ee73c4]/10 to-pink-100 rounded-3xl p-8 md:p-12 mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ee73c4] mb-6">
              आपका साथ क्यों जरूरी है?
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto mb-8">
              आज के समय में एक मजबूत और निर्भीक मीडिया ही भ्रष्टाचार को चुनौती दे सकता है और जनता की आवाज़ सरकार तक पहुँचा सकता है।<br />
              आपकी एक सदस्यता हमें और मजबूत बनाती है ताकि हम आपके इलाके की हर सच्चाई पूरे दमदार अंदाज़ में सामने ला सकें।
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <p className="text-xl font-bold text-gray-900">हमारी ताकत बनें – आज ही सदस्य बनें!</p>
            </div>
          </section>

          {/* कॉल टू एक्शन */}
          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#ee73c4] mb-6">
              📌 सदस्यता लें, और सच की इस लड़ाई में हमारे साथ खड़े हों।
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              आपका साथ… हमारी आवाज़… यही बदलाव की शुरुआत है।
            </p>
            <Link
              href="/payment"  // पेमेंट पेज पर ले जाएँ
              className="bg-[#ee73c4] text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-pink-600 transition shadow-2xl inline-block"
            >
              अभी सदस्य बनें
            </Link>
          </section>

          {/* सदस्यता प्लान्स */}
          <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              सदस्यता प्लान्स
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* प्रिंट प्लान */}
              <div className="border border-[#ee73c4] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">📰 प्रिंट न्यूज़पेपर</h3>
                <p className="text-lg text-gray-700 mb-2">घरेलू सदस्यता</p>
                <div className="bg-[#ee73c4]/10 rounded-lg p-4 mb-4">
                  <p className="text-3xl font-bold text-gray-900">₹260</p>
                  <p className="text-sm text-gray-600">प्रति माह (26 दिन × ₹10)</p>
                </div>
                <p className="text-sm text-gray-600 mb-6">वार्षिक: ₹3120</p>
                <Link
                  href="/payment?plan=print"
                  className="bg-[#ee73c4] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition inline-block"
                >
                  प्रिंट सदस्यता लें
                </Link>
              </div>

              {/* डिजिटल प्लान */}
              <div className="border border-[#ee73c4] rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">🌐 डिजिटल न्यूज़पेपर</h3>
                <p className="text-lg text-gray-700 mb-2">मोबाइल/ऑनलाइन सदस्यता</p>
                <div className="bg-[#ee73c4]/10 rounded-lg p-4 mb-4">
                  <p className="text-3xl font-bold text-gray-900">₹130</p>
                  <p className="text-sm text-gray-600">प्रति माह (26 दिन × ₹5)</p>
                </div>
                <p className="text-sm text-gray-600 mb-6">वार्षिक: ₹1560</p>
                <Link
                  href="/payment?plan=digital"
                  className="bg-[#ee73c4] text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition inline-block"
                >
                  डिजिटल सदस्यता लें
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}