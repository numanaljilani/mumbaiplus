// app/login/page.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '../../service/api/api';
import { setToken , setUser } from "../../service/slice/userSlice"
import { useDispatch } from 'react-redux';

// Zod Schema
const loginSchema = z.object({
  email: z.string().email('मान्य ईमेल पता दें'),
  password: z.string().min(6, 'पासवर्ड कम से कम 6 अक्षर का हो'),
});

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap(); // unwrap() से error handle होता है

      // Redux में स्टोर करें
      dispatch(setToken({
      
        token: result.token,
      }));
      dispatch(setUser({
      
      user: result.user,
      }));

      // सफल लॉगिन → डैशबोर्ड
      router.push('/');
    } catch (err) {
      console.error('Login failed:', err);
      const message = err.data?.message || err.error || 'लॉगिन विफल। कृपया फिर से कोशिश करें';
      setError('root', { message });
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

        {/* Global Error */}
        {errors.root && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-6 text-center font-medium animate-pulse">
            {errors.root.message}
          </div>
        )}

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl border-t-8 border-blue-600 overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold">रिपोर्टर लॉगिन</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm md:text-base font-bold text-blue-900 mb-2">
                ईमेल पता *
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="ram@example.com"
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base transition ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
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
                placeholder="••••••••"
                className={`w-full px-4 py-3 border-2 rounded-xl focus:border-blue-500 outline-none text-base ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs md:text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" className="opacity-75" />
                  </svg>
                  लॉगिन हो रहा है...
                </>
              ) : (
                'लॉगिन करें'
              )}
            </button>

            {/* Links */}
            <div className="text-center text-sm text-blue-700">
              <p>
                <a href="/register-reporter" className="font-bold hover:underline">रिपोर्टर बनें</a> |{' '}
                <a href="#" className="font-bold hover:underline">पासवर्ड भूल गए?</a>
              </p>
            </div>
          </form>

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