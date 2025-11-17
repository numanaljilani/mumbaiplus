// app/login/page.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Zod Schema - Login
const loginSchema = z.object({
  email: z.string().email('मान्य ईमेल पता दें'),
  password: z.string().min(6, 'पासवर्ड कम से कम 6 अक्षर का हो'),
});

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
console.log(result)
      if (res.ok) {
        // Save token & redirect
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        router.push('/'); // या डैशबोर्ड
      } else {
        setError(result.message || 'लॉगिन विफल');
      }
    } catch (err) {
      setError('इंटरनेट कनेक्शन चेक करें');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 font-mumbai flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <Image
            src="/logo.jpg"
            alt="मुंबई प्लस"
            width={300}
            height={80}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">लॉगिन करें</h1>
          <p className="text-base md:text-lg text-blue-600 mt-2">रिपोर्टर डैशबोर्ड तक पहुंचें</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-6 text-center text-sm font-medium">
            {error}
          </div>
        )}

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-blue-600 overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold">रिपोर्टर लॉगिन</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                ईमेल पता *
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ram@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                पासवर्ड *
              </label>
              <input
                {...register('password')}
                type="password"
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg py-3.5 rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-70 flex items-center justify-center gap-2"
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
                    लोड हो रहा है...
                  </>
                ) : (
                  'लॉगिन करें'
                )}
              </button>
            </div>

            {/* Links */}
            <div className="text-center text-xs md:text-sm text-blue-700 space-y-1">
              <p>
                <a href="/register-reporter" className="font-bold hover:underline">
                  रिपोर्टर बनें
                </a>{' '}
                |{' '}
                <a href="#" className="font-bold hover:underline">
                  पासवर्ड भूल गए?
                </a>
              </p>
            </div>
          </form>

          {/* Trust Badge */}
          <div className="bg-blue-50 px-6 py-4 text-center border-t-2 border-blue-200">
            <p className="text-xs md:text-sm text-blue-800 font-medium">
              सुरक्षित लॉगिन | SSL एन्क्रिप्टेड | 2009 से विश्वसनीय
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}