import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-mp-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.jpg" alt="मुंबई प्लस" width={400} height={100} />
            <p className="mt-4 text-gray-300 text-lg">
              2009 से मुंबई की सच्ची आवाज़<br />
              <span className="text-mp-gold font-bold">अब दैनिक अख़बार के रूप में</span>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-mp-gold mb-4">रिपोर्टर बनें</h3>
            <p className="text-gray-300 mb-4">
              अपने वार्ड की खबरें, भ्रष्टाचार, समस्याएँ भेजें<br />
              आप बन सकते हैं <span className="text-mp-red font-bold">लोकल रिपोर्टर</span>
            </p>
            <p className="text-2xl font-bold text-mp-gold">9594939595</p>
            <p className="text-gray-400">mumbaiplusnews@gmail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-mp-gold mb-4">हमसे जुड़ें</h3>
            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-mp-red">Facebook</a>
              <a href="#" className="hover:text-mp-red">YouTube</a>
              <a href="#" className="hover:text-mp-red">Instagram</a>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              © 2009-2025 मुंबई प्लस | RNI: MAHHI/2009/28028
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}