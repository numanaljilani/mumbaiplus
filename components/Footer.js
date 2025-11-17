// components/Footer.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-16 font-mumbai">
      <div className="container mx-auto px-4">

        {/* मुख्य ग्रिड */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

          {/* 1. लोगो + मिशन */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.jpg"
              alt="मुंबई प्लस"
              width={380}
              height={100}
              className="mb-5 rounded-lg shadow-2xl"
              priority
            />
            <p className="text-gray-300 text-center md:text-left leading-relaxed text-sm md:text-base">
              2009 से मुंबई की सच्ची आवाज़<br />
              <span className="text-[#ee73c4] font-bold text-lg block mt-2">
                अब दैनिक अख़बार के रूप में
              </span>
            </p>
          </div>

          {/* 2. रिपोर्टर बनें */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#ee73c4] mb-4">रिपोर्टर बनें</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              अपने वार्ड की खबरें, भ्रष्टाचार, पानी, सड़क, अवैध निर्माण — सब भेजें<br />
              आप बन सकते हैं <span className="text-pink-400 font-bold">मुंबई प्लस का लोकल रिपोर्टर</span>
            </p>
            <div className="bg-[#ee73c4] text-white font-bold text-xl md:text-2xl py-3 px-6 rounded-full inline-block shadow-lg">
              9594939595
            </div>
            <p className="text-gray-400 text-sm mt-3">mumbaiplusnews@gmail.com</p>
          </div>

          {/* 3. क्विक लिंक्स */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#ee73c4] mb-5 text-center md:text-left">
              महत्वपूर्ण लिंक
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              {[
                { label: 'ई-पेपर', href: '/epaper' },
                { label: 'मेम्बर बनें', href: '/member' },
                { label: 'वार्ड न्यूज़', href: '/news?category=mumbai' },
                { label: 'भ्रष्टाचार एक्सपोज़', href: '/news?category=corruption' },
                { label: 'BMC न्यूज़', href: '/news?category=bmc' },
                { label: 'हमारे बारे में', href: '/about' },
                { label: 'गोपनीयता नीति', href: '/privacy' },
                { label: 'संपर्क करें', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#ee73c4] transition flex items-center gap-2 group"
                  >
                    <span className="text-[#ee73c4] group-hover:translate-x-1 transition-transform">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. संपादकीय + कार्यालय + सोशल आइकन्स */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#ee73c4] mb-5">संपादकीय</h3>
            <div className="space-y-3 text-gray-300 text-sm md:text-base">
              <p><span className="font-bold text-pink-400">संपादक:</span> मोहम्मद फारुख मेवाती</p>
              <p><span className="font-bold text-pink-400">कार्यकारी संपादक:</span> राजेश यू. जायसवाल</p>
            </div>

            <h3 className="text-xl font-bold text-[#ee73c4] mt-8 mb-3">कार्यालय</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ओम शिव साई सीएचएस, ए-06,<br />
              नियर रुनवाल एंड ओमकार एस्क्वायर,<br />
              सायन (पूर्व), मुंबई - 400022 (MH) India<br />
              <span className="text-pink-400 font-bold">RNI: MAHHI/2009/28028</span>
            </p>

            {/* सोशल मीडिया आइकन्स */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <Link
                href="https://facebook.com/mumbaiplus"
                target="_blank"
                aria-label="Facebook"
                className="text-3xl hover:text-[#ee73c4] hover:scale-110 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </Link>

              <Link
                href="https://youtube.com/mumbaiplus"
                target="_blank"
                aria-label="YouTube"
                className="text-3xl hover:text-[#ee73c4] hover:scale-110 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z"/>
                </svg>
              </Link>

              <Link
                href="https://instagram.com/mumbaiplus"
                target="_blank"
                aria-label="Instagram"
                className="text-3xl hover:text-[#ee73c4] hover:scale-110 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                </svg>
              </Link>

              {/* अगर WhatsApp भी जोड़ना हो तो */}
              <Link
                href="https://wa.me/919594939595"
                target="_blank"
                aria-label="WhatsApp"
                className="text-3xl hover:text-[#ee73c4] hover:scale-110 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-9 h-9">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.263c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.884 3.488"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* बॉटम बार */}
        <div className="border-t border-pink-900 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-gray-400 text-xs md:text-sm">
            <p>
              © 2009-{currentYear} <span className="text-[#ee73c4] font-bold">मुंबई प्लस</span> | सभी अधिकार सुरक्षित
            </p>
            <p className="mt-3 md:mt-0 text-pink-400 font-bold">
              मुंबई की हर खबर, हर वार्ड से — सच्चाई के साथ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}