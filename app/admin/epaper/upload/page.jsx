// app/admin/epaper/upload/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { server } from '../../../../contants';

// Zod Schema
const epaperSchema = z.object({
  date: z.string().min(1, 'तारीख चुनना जरूरी है'),
  pdfFile: z
    .instanceof(FileList)
    .refine((files) => files.length === 1, 'PDF फाइल चुनें')
    .refine((files) => files[0]?.type === 'application/pdf', 'केवल PDF फाइल ही मान्य है')
    .refine((files) => files[0]?.size <= 50 * 1024 * 1024, 'PDF 50MB से कम होनी चाहिए'),
});

export default function UploadEPaper() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(epaperSchema),
  });

  const selectedFile = watch('pdfFile')?.[0];

  // Cloudinary अपलोड फंक्शन
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mumbaiplus_epaper'); // अपना अपलोड प्रीसेट डालें
    formData.append('resource_type', 'raw');

    const res = await fetch(
      `${server}/api/epaper`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || 'अपलोड फेल');
    return data.secure_url;
  };

  const onSubmit = async (data) => {
    setUploading(true);
    setMessage('');
    setProgress(0);

    try {
      // Step 1: Cloudinary पर PDF अपलोड करें
      setMessage('PDF अपलोड हो रहा है...');
      const pdfUrl = await uploadToCloudinary(data.pdfFile[0]);

      // Step 2: Backend पर सेव करें
      setMessage('ई-पेपर डेटाबेस में जोड़ा जा रहा है...');
      const res = await fetch('/api/epaper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          date: data.date,
          pdfUrl,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('ई-पेपर सफलतापूर्वक अपलोड हो गया!');
        reset();
        setTimeout(() => router.push('/admin/epaper'), 2000);
      } else {
        setMessage(result.message || 'कुछ गलत हुआ');
      }
    } catch (err) {
      setMessage(err.message || 'इंटरनेट कनेक्शन चेक करें');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl md:text-5xl font-bold text-[#ee73c4] text-center mb-8">
            नया ई-पेपर अपलोड करें
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

            {/* तारीख */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-3">
                अखबार की तारीख *
              </label>
              <input
                type="date"
                {...register('date')}
                className={`w-full px-6 py-5 rounded-xl border-2 text-lg outline-none transition ${
                  errors.date ? 'border-red-500' : 'border-gray-300 focus:border-[#ee73c4]'
                }`}
              />
              {errors.date && <p className="text-red-600 text-sm mt-2">{errors.date.message}</p>}
            </div>

            {/* PDF फाइल */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-3">
                ई-पेपर PDF फाइल *
              </label>

              <div className="border-4 border-dashed border-[#ee73c4]/30 rounded-2xl p-10 text-center hover:border-[#ee73c4] transition">
                <input
                  type="file"
                  accept=".pdf"
                  {...register('pdfFile')}
                  className="hidden"
                  id="pdf-upload"
                />
                <label htmlFor="pdf-upload" className="cursor-pointer">
                  <div className="text-[#ee73c4] text-7xl mb-4">PDF</div>
                  <p className="text-2xl font-bold text-gray-700">क्लिक करें या PDF यहाँ ड्रैग करें</p>
                  <p className="text-gray-500 mt-3">अधिकतम 50MB • केवल PDF फाइल</p>
                </label>
              </div>

              {/* चुनी गई फाइल दिखाएँ */}
              {selectedFile && (
                <div className="mt-6 bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">PDF</div>
                      <div>
                        <p className="font-bold text-lg text-green-800">{selectedFile.name}</p>
                        <p className="text-sm text-green-600">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => reset({ pdfFile: null })}
                      className="text-red-600 hover:text-red-800 font-bold"
                    >
                      हटाएँ
                    </button>
                  </div>
                </div>
              )}

              {errors.pdfFile && (
                <p className="text-red-600 text-sm mt-3">{errors.pdfFile.message}</p>
              )}
            </div>

            {/* सबमिट बटन */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={uploading}
                className="flex-1 bg-[#ee73c4] text-white py-6 rounded-xl text-2xl font-bold hover:bg-pink-600 disabled:opacity-70 transition shadow-2xl flex items-center justify-center gap-3"
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" className="opacity-75" />
                    </svg>
                    अपलोड हो रहा है...
                  </>
                ) : (
                  'ई-पेपर अपलोड करें'
                )}
              </button>

              <button
                type="button"
                onClick={() => router.push('/admin/epaper')}
                className="px-10 py-6 bg-gray-300 text-gray-800 rounded-xl text-xl font-bold hover:bg-gray-400 transition"
              >
                कैंसिल
              </button>
            </div>
          </form>

          {/* मैसेज */}
          {message && (
            <div className={`mt-10 text-center p-8 rounded-2xl text-2xl font-bold ${
              message.includes('सफल') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}