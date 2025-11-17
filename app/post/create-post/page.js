// app/upload/page.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// हिंदी → इंग्लिश कैटेगरी मैप
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
};

// Zod Schema
const newsSchema = z.object({
  title: z.string().min(10, 'शीर्षक कम से कम 10 अक्षर का हो').max(120),
  description: z.string().min(50, 'विवरण कम से कम 50 अक्षर का हो'),
  ward: z.string().min(3, 'वार्ड/क्षेत्र भरें'),
  location: z.string().optional(),
  category: z.string().min(1, 'कैटेगरी चुनें'),
});

export default function UploadNewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(newsSchema),
  });

  // JWT से यूज़र लोड करें
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

  const onSubmit = async (data) => {
    if (!user) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('heading', data.title);
    formData.append('description', data.description);
    formData.append('ward', data.ward);
    formData.append('location', data.location || '');
    formData.append('category', categoryMap[data.category]); // इंग्लिश में सेव
    formData.append('userId', user.id);
    if (imageFile) formData.append('image', imageFile);

    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
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
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-700 font-bold">लोड हो रहा है...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-mumbai py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <Image
            src="/logo.jpg"
            alt="मुंबई प्लस"
            width={380}
            height={100}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">खबर अपलोड करें</h1>
          <p className="text-base md:text-lg text-blue-600 mt-2">
            नमस्ते, <strong>{user.name}</strong>! आपकी खबर मुंबई की आवाज़ बनेगी।
          </p>
        </div>

        {/* Success */}
        {success && (
          <div className="bg-green-50 border-4 border-green-500 text-green-800 p-8 rounded-3xl text-center shadow-xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">धन्यवाद!</h2>
            <p className="text-lg">आपकी खबर सफलतापूर्वक प्राप्त हो गई।</p>
            <p className="text-base mt-2">
              हमारी टीम जाँच के बाद इसे प्रकाशित करेगी।
            </p>
            <p className="text-blue-700 font-bold mt-4 text-lg">
              3 सेकंड में होम पेज पर...
            </p>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-blue-600 overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold">खबर का विवरण भरें</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
            {/* Reporter Info (Hidden) */}
            <input type="hidden" {...register('reporterName')} />
            <input type="hidden" {...register('mobile')} />

            {/* Ward & Category */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                  वार्ड / क्षेत्र *
                </label>
                <input
                  {...register('ward')}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base transition ${
                    errors.ward ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="दादर पश्चिम, अंधेरी ईस्ट"
                />
                {errors.ward && <p className="text-red-500 text-xs mt-1">{errors.ward.message}</p>}
              </div>

              <div>
                <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                  कैटेगरी *
                </label>
                <select
                  {...register('category')}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">चुनें...</option>
                  {Object.keys(categoryMap).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                सटीक स्थान (वैकल्पिक)
              </label>
              <input
                {...register('location')}
                className="w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base"
                placeholder="मेन रोड, BMC ऑफिस के पास"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                खबर का शीर्षक *
              </label>
              <input
                {...register('title')}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base transition ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="अवैध हॉकर ज़ोन, पानी की किल्लत..."
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                पूरा विवरण *
              </label>
              <textarea
                {...register('description')}
                rows={6}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none resize-none text-base transition ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="क्या हुआ? कब? कहाँ? कौन ज़िम्मेदार? सब विस्तार से लिखें..."
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                फोटो / वीडियो (वैकल्पिक)
              </label>
              <div className="border-2 border-dashed border-blue-400 rounded-xl p-6 md:p-8 text-center">
                <input
                  type="file"
                  accept="image/*,video/*"
                  className="hidden"
                  id="image-upload"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="text-blue-600 text-5xl md:text-6xl mb-3">Upload</div>
                  <p className="text-base md:text-lg font-bold text-blue-800">
                    क्लिक करें या फाइल ड्रैग करें
                  </p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    JPG, PNG, MP4 (अधिकतम 10MB)
                  </p>
                </label>
              </div>
              {imageFile && (
                <p className="mt-3 text-green-600 font-bold text-sm md:text-base">
                  चुना गया: {imageFile.name}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg px-10 md:px-12 py-3.5 md:py-4 rounded-full shadow-xl transition transform hover:scale-105 disabled:opacity-70 flex items-center mx-auto gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    भेजा जा रहा है...
                  </>
                ) : (
                  'खबर भेजें'
                )}
              </button>
            </div>

            {/* Note */}
            <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 text-center mt-6">
              <p className="text-blue-800 text-xs md:text-sm font-medium">
                आपकी खबर की जाँच के बाद प्रकाशित की जाएगी।
                <br />
                संपर्क: <span className="font-bold">9594939595</span> | mumbaiplusnews@gmail.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}