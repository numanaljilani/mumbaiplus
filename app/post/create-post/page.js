// app/upload/page.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// हिंदी → इंग्लिश कैटेगरी मैप (बैकएंड के लिए)
const categoryMap = {
  राजनीति: 'politics',
  तकनीक: 'tech',
  भ्रष्टाचार: 'corruption',
  पानी: 'water',
  सड़क: 'roads',
  'अवैध निर्माण': 'illegal_construction',
  BMC: 'bmc',
  स्वास्थ्य: 'health',
  शिक्षा: 'education',
  अपराध: 'crime',
  अन्य: 'other',
  मुंबई: 'mumbai',
  महाराष्ट्र: 'maharashtra',
  'देश-विदेश': 'national',
  फिल्म: 'film',
  खेल: 'sports',
};

// नई कैटेगरी लिस्ट (हिंदी में दिखेगी)
const categories = [
  'मुंबई', 'महाराष्ट्र', 'देश-विदेश', 'फिल्म', 'खेल',
  'राजनीति', 'भ्रष्टाचार', 'पानी', 'सड़क', 'BMC',
  'स्वास्थ्य', 'शिक्षा', 'अपराध', 'अवैध निर्माण', 'तकनीक', 'अन्य'
];

const newsSchema = z.object({
  title: z.string().min(10, 'शीर्षक कम से कम 10 अक्षर का हो'),
  description: z.string().min(50, 'विवरण कम से कम 50 अक्षर का हो'),
  ward: z.string().min(2, 'वार्ड/क्षेत्र भरें'),
  location: z.string().optional(),
  category: z.string().min(1, 'कैटेगरी चुनें'),
});

export default function UploadNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // ← नई स्टेट: इमेज प्रीव्यू

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(newsSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (!token || !savedUser) {
      router.push('/login');
      return;
    }

    const userData = JSON.parse(savedUser);
    setUser(userData);
    setValue('reporterName', userData.name);
    setValue('mobile', userData.mobile);
  }, [router, setValue]);

  // इमेज चुनने पर प्रीव्यू दिखाएँ
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    if (!user) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('heading', data.title);
    formData.append('description', data.description);
    formData.append('ward', data.ward);
    formData.append('location', data.location || '');
    formData.append('category', categoryMap[data.category]);
    formData.append('userId', user.id);
    if (imageFile) formData.append('image', imageFile);

    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/'), 3000);
      } else {
        const err = await res.json();
        alert(err.message || 'खबर भेजने में त्रुटि');
      }
    } catch (err) {
      alert('इंटरनेट कनेक्शन चेक करें');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ee73c4] mx-auto"></div>
          <p className="mt-4 text-[#ee73c4] font-bold text-xl">लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-mumbai py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* हीरो */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ee73c4] mb-3">
            खबर अपलोड करें
          </h1>
          <p className="text-xl text-gray-700">
            नमस्ते, <strong className="text-[#ee73c4]">{user.name}</strong> जी! आपकी खबर मुंबई की आवाज़ बनेगी
          </p>
        </div>

        {/* सक्सेस मैसेज */}
        {success && (
          <div className="bg-green-50 border-4 border-green-500 text-green-800 p-10 rounded-3xl text-center shadow-2xl mb-10">
            <h2 className="text-3xl font-bold mb-4">धन्यवाद!</h2>
            <p className="text-xl">आपकी खबर सफलतापूर्वक प्राप्त हो गई है।</p>
            <p className="text-lg mt-3">हमारी टीम जल्द ही इसे प्रकाशित करेगी</p>
          </div>
        )}

        {/* फॉर्म कार्ड */}
        <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-[#ee73c4] overflow-hidden">
          <div className="bg-[#ee73c4] text-white text-center py-5">
            <h2 className="text-2xl font-bold">अपनी खबर यहाँ लिखें</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-8">

            {/* वार्ड + कैटेगरी */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold text-gray-800 mb-2">वार्ड / इलाका *</label>
                <input
                  {...register('ward')}
                  className={`w-full px-5 py-4 rounded-xl border-2 ${errors.ward ? 'border-red-500' : 'border-gray-300'} focus:border-[#ee73c4] outline-none transition`}
                  placeholder="दादर, घाटकोपर, अंधेरी..."
                />
                {errors.ward && <p className="text-red-500 text-sm mt-1">{errors.ward.message}</p>}
              </div>

              <div>
                <label className="block font-bold text-gray-800 mb-2">कैटेगरी *</label>
                <select
                  {...register('category')}
                  className={`w-full px-5 py-4 rounded-xl border-2 ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:border-[#ee73c4] outline-none`}
                >
                  <option value="">कैटेगरी चुनें</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
              </div>
            </div>

            {/* शीर्षक */}
            <div>
              <label className="block font-bold text-gray-800 mb-2">खबर का शीर्षक *</label>
              <input
                {...register('title')}
                className={`w-full px-5 py-4 rounded-xl border-2 ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:border-[#ee73c4] outline-none`}
                placeholder="अवैध कब्ज़ा, पानी की किल्लत, नई मेट्रो लाइन..."
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>

            {/* विवरण */}
            <div>
              <label className="block font-bold text-gray-800 mb-2">पूरा विवरण *</label>
              <textarea
                {...register('description')}
                rows={7}
                className={`w-full px-5 py-4 rounded-xl border-2 ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:border-[#ee73c4] outline-none resize-none`}
                placeholder="क्या हुआ? कब? कहाँ? कौन जिम्मेदार? पूरी जानकारी दें..."
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* इमेज अपलोड + प्रीव्यू */}
            <div>
              <label className="block font-bold text-gray-800 mb-3">फोटो / वीडियो (वैकल्पिक)</label>
              <div className="border-4 border-dashed border-[#ee73c4]/30 rounded-2xl p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="text-[#ee73c4] text-6xl mb-4">Camera</div>
                  <p className="text-xl font-bold text-gray-700">क्लिक करें या फोटो ड्रैग करें</p>
                  <p className="text-sm text-gray-500 mt-2">JPG, PNG (10MB तक)</p>
                </label>
              </div>

              {/* इमेज प्रीव्यू */}
              {imagePreview && (
                <div className="mt-6 bg-gray-100 rounded-2xl p-4 shadow-lg">
                  <p className="text-sm font-bold text-gray-700 mb-3 text-center">चुनी गई फोटो:</p>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center mt-3 text-green-600 font-bold">
                    {imageFile.name}
                  </p>
                </div>
              )}
            </div>

            {/* सबमिट बटन */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#ee73c4] hover:bg-pink-600 text-white font-bold text-xl px-16 py-5 rounded-full shadow-2xl transition transform hover:scale-105 disabled:opacity-70 flex items-center mx-auto gap-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" className="opacity-75" />
                    </svg>
                    भेजा जा रहा है...
                  </>
                ) : (
                  'खबर प्रकाशन के लिए भेजें'
                )}
              </button>
            </div>

            {/* नोट */}
            <div className="bg-pink-50 border-2 border-[#ee73c4]/30 rounded-2xl p-6 text-center">
              <p className="text-gray-700">
                आपकी खबर की जाँच के बाद <strong>24 घंटे</strong> में प्रकाशित की जाएगी।
                <br />
                संपर्क: <strong className="text-[#ee73c4]">9594939595</strong> | mumbaiplusnews@gmail.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}