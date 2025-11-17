// app/register-reporter/page.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Zod Schema - सिर्फ़ 4 फ़ील्ड
const reporterSchema = z.object({
  name: z.string().min(2, 'नाम कम से कम 2 अक्षर का हो').max(50),
  email: z.string().email('मान्य ईमेल पता दें'),
  password: z.string().min(6, 'पासवर्ड कम से कम 6 अक्षर का हो'),
  mobile: z.string().regex(/^\d{10}$/, '10 अंकों का मोबाइल नंबर'),
});

export default function RegisterReporterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(reporterSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => router.push('/'), 4000);
      } else {
        alert(result.message || 'रजिस्ट्रेशन विफल');
      }
    } catch (err) {
      alert('कनेक्शन त्रुटि। कृपया फिर कोशिश करें।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-mumbai py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Logo & Title */}
        <div className="text-center mb-10">
          <Image
            src="/logo.jpg"
            alt="मुंबई प्लस"
            width={350}
            height={90}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-4xl font-bold text-blue-800">रिपोर्टर बनें</h1>
          <p className="text-lg text-blue-700 mt-2">मुंबई की हर खबर – आपकी आवाज़ से!</p>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="bg-blue-50 border-4 border-blue-500 text-blue-800 p-10 rounded-3xl text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">धन्यवाद!</h2>
            <p className="text-lg mb-2">आपका आवेदन सफलतापूर्वक प्राप्त हुआ।</p>
            <p className="text-base">
              हमारी टीम <strong>मैनुअली सत्यापित</strong> करेगी और आपको <strong>ईमेल</strong> भेजेगी।
            </p>
            <p className="text-blue-700 font-bold mt-6 text-lg">
              4 सेकंड में होम पेज पर...
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-blue-600 overflow-hidden">
            <div className="bg-blue-600 text-white px-8 py-4 text-center">
              <h2 className="text-2xl font-bold">रिपोर्टर रजिस्ट्रेशन</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-base font-bold text-blue-900 mb-2">पूरा नाम *</label>
                <input
                  {...register('name')}
                  type="text"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base transition ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="राम शर्मा"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-base font-bold text-blue-900 mb-2">ईमेल पता *</label>
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="ram@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-base font-bold text-blue-900 mb-2">पासवर्ड *</label>
                <input
                  {...register('password')}
                  type="password"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-base font-bold text-blue-900 mb-2">मोबाइल नंबर *</label>
                <input
                  {...register('mobile')}
                  type="tel"
                  className={`w-full px-5 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="9594939595"
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl transition transform hover:scale-105 disabled:opacity-70"
                >
                  {loading ? 'लोड हो रहा है...' : 'आवेदन भेजें'}
                </button>
              </div>

              {/* Note */}
              <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 mt-6 text-center">
                <p className="text-blue-800 font-medium text-sm">
                  आपका आवेदन प्राप्त होने के बाद हमारी टीम <strong>मैनुअली सत्यापित</strong> करेगी।
                  <br />
                  स्वीकृति पर आपको <strong>ईमेल</strong> द्वारा लॉगिन जानकारी भेजी जाएगी।
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}