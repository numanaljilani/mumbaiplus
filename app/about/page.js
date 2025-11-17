// app/about/page.jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'हमारे बारे में - मुंबई प्लस | मुंबई की सच्ची आवाज़',
  description: '2009 से मुंबई के हर वार्ड की आवाज़। अब दैनिक अख़बार के रूप में आपके साथ!',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-mumbai">
      <Header />

      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* हीरो सेक्शन */}
          <section className="text-center mb-16">
           
            <h1 className="text-4xl md:text-6xl font-bold text-[#ee73c4] mb-6">
              मुंबई प्लस — मुंबई की आवाज़,<br />
              अब हर दिन आपके साथ!
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              मुंबई जैसे महानगर में हर दिन सैकड़ों घटनाएँ घटती हैं — कोई सड़क टूटी मिलती है,<br />
              कहीं विकास कार्य अधूरा रह जाता है, तो कहीं जनता की आवाज़ अनसुनी रह जाती है।
            </p>
          </section>

          {/* हमारी यात्रा */}
          <section className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ee73c4] mb-8 text-center">
              हमारी यात्रा — 2009 से आज तक
            </h2>
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
              <p>
                “मुंबई प्लस” की स्थापना साल <strong>2009</strong> में एक साप्ताहिक लोकल अख़बार के रूप में हुई थी।<br />
                हमारा उद्देश्य साफ था — मुंबई की स्थानीय समस्याओं, जनता की आवाज़ और जमीनी हकीकत को सामने लाना।
              </p>
              <p>
                समय के साथ यह अख़बार मुंबई के लोकल मीडिया में अपनी अलग पहचान बना चुका है।
              </p>
              <p className="text-2xl font-bold text-[#ee73c4] py-8 bg-pink-50 rounded-2xl">
                पाठकों और समाजसेवियों की मांग पर<br />
                <span className="text-4xl">अब “मुंबई प्लस” दैनिक समाचार पत्र बन गया है!</span>
              </p>
            </div>
          </section>

          {/* हमारा मिशन */}
          <section className="bg-gradient-to-r from-[#ee73c4]/10 to-pink-100 rounded-3xl p-10 md:p-14 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ee73c4] mb-10 text-center">
              हमारा मिशन — जनता की आवाज़, जनता तक
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-800">
              {[
                'मुंबई के हर वार्ड और हर क्षेत्र की स्थानीय खबरों को उजागर करना।',
                'आम जनता की समस्याओं को सरकारी अधिकारियों तक पहुँचाना।',
                'भ्रष्टाचार, अवैध निर्माण और अन्याय के खिलाफ जनजागृति फैलाना।',
                'आम नागरिकों को पत्रकारिता में भागीदार बनाना — हर व्यक्ति “लोकल रिपोर्टर” बन सके।',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/70 rounded-2xl p-6 shadow-lg">
                  <span className="text-3xl">✅</span>
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* रिपोर्टर बनें */}
          <section className="text-center bg-[#ee73c4] text-white rounded-3xl p-12 md:p-16 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              रिपोर्टर बनें — अपने क्षेत्र की सच्ची आवाज़ उठाएँ!
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-10">
              “मुंबई प्लस” अब मुंबई के हर वार्ड में फ्रीलांसर रिपोर्टर और कैमरा मैन नियुक्त कर रहा है।<br />
              मेंबर बनकर आप हमारी टीम का हिस्सा बन सकते हैं और अपनी खबरें प्रकाशित करवा सकते हैं।
            </p>
            <Link
              href="/member"
              className="bg-white text-[#ee73c4] px-12 py-5 rounded-full text-2xl font-bold hover:bg-gray-100 transition shadow-2xl inline-block"
            >
              अभी मेंबर बनें
            </Link>
          </section>

          {/* क्यों खास है मुंबई प्लस */}
          <section className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ee73c4] mb-10 text-center">
              मुंबई प्लस क्यों खास है?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              {[
                '2009 से लगातार जनता का विश्वास',
                'लोकल से सिटी-लेवल तक सशक्त उपस्थिति',
                'निष्पक्ष, निर्भीक और प्रमाणिक पत्रकारिता',
                'डिजिटल युग में भी ग्राउंड रिपोर्टिंग पर ज़ोर',
                'सोशल मीडिया, वेबसाइट और ई-पेपर के साथ सम्पूर्ण कवरेज',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="text-4xl">⭐</div>
                  <p className="text-gray-700 font-semibold">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* कॉल टू एक्शन + कॉन्टैक्ट */}
          <section className="text-center bg-gradient-to-b from-[#ee73c4] to-pink-700 text-white rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              हमसे जुड़िए — एक सशक्त मिशन का हिस्सा बनिए!
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              आपके इलाके की सच्ची खबर — अब आप ही की आवाज़ से निकलेगी!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg mt-12">
              <div>
                <p className="font-bold text-2xl mb-2">संपर्क करें</p>
                <p className="text-3xl">9594939595</p>
              </div>
              <div>
                <p className="font-bold text-2xl mb-2">ईमेल</p>
                <p className="text-xl break-all">mumbaiplusnews@gmail.com</p>
              </div>
              <div>
                <p className="font-bold text-2xl mb-2">वेबसाइट</p>
                <Link href="/" className="text-xl underline hover:text-pink-200">
                  www.mumbaiplus.in
                </Link>
              </div>
            </div>

            <div className="mt-12 text-2xl md:text-3xl font-bold italic">
              “हमारा वादा है — हम सिर्फ खबरें नहीं,<br />
              जनता की सच्ची आवाज़ पहुँचाएँगे!”
            </div>

            <p className="mt-8 text-2xl font-bold">
              मुंबई प्लस — सच्ची पत्रकारिता, सशक्त मुंबई के लिए।
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}