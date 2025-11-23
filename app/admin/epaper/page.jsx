// // app/admin/epaper/page.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useSearchParams, useRouter } from 'next/navigation';
// // import useAuthStore from '@/stores/authStore'; // अपना auth store
// import { server } from '../../../contants';

// export default function AdminEPaperList() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   // const { token } = useAuthStore();

//   const [epapers, setEpapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchDate, setSearchDate] = useState(searchParams.get('search') || '');
//   const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState('');

//   const fetchEPapers = async (date = '', page = 1) => {
//     setLoading(true);
//     setError('');

//     try {
//       const params = new URLSearchParams();
//       if (date) params.append('search', date);
//       if (page > 1) params.append('page', page);

//       const res = await fetch(`${server}/api/epaper?${params}`, {
//         headers: {
//           // Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         cache: 'no-store',
//       });

//       if (!res.ok) throw new Error('ई-पेपर लोड नहीं हुए');

//       const data = await res.json();
//       setEpapers(data.epapers || []);
//       setTotalPages(data.totalPages || 1);
//       setCurrentPage(page);

//       // URL अपडेट करें (बिना रीलोड के)
//       const newUrl = `/admin/epaper${params.toString() ? `?${params}` : ''}`;
//       router.replace(newUrl, { scroll: false });
//     } catch (err) {
//       setError(err.message || 'कुछ गलत हुआ');
//       setEpapers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // पहली बार लोड + सर्च/पेज चेंज पर
//   useEffect(() => {
//     if (true) {
//       fetchEPapers(searchDate || '', currentPage);
//     }
//   }, [, searchDate, currentPage]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const date = e.target.search.value;
//     setSearchDate(date);
//     setCurrentPage(1);
//   };

//   // if (!token) {
//   //   return (
//   //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//   //       <p className="text-2xl text-red-600">लॉगिन करें</p>
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4 max-w-7xl">

//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#ee73c4]">
//             ई-पेपर मैनेजमेंट
//           </h1>
//           <Link
//             href="/admin/epaper/upload"
//             className="bg-[#ee73c4] text-white px-8 py-4 rounded-full font-bold hover:bg-pink-600 transition shadow-lg flex items-center gap-3 whitespace-nowrap"
//           >
//             नया ई-पेपर अपलोड करें
//           </Link>
//         </div>

//         {/* Search Bar */}
//         <div className="bg-white rounded-3xl shadow-xl p-6 mb-10">
//           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
//             <input
//               type="date"
//               name="search"
//               defaultValue={searchDate}
//               className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-[#ee73c4] outline-none text-lg"
//             />
//             <button className="bg-[#ee73c4] text-white px-10 py-4 rounded-xl font-bold hover:bg-pink-600 transition shadow-lg">
//               खोजें
//             </button>
//             {searchDate && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchDate('');
//                   setCurrentPage(1);
//                 }}
//                 className="text-red-600 hover:text-red-800 font-bold"
//               >
//                 सर्च हटाएँ
//               </button>
//             )}
//           </form>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="text-center py-20">
//             <div className="inline-block animate-spin rounded-full h-16 w-16 border-8 border-[#ee73c4] border-t-transparent"></div>
//             <p className="mt-6 text-2xl text-gray-600">लोड हो रहा है...</p>
//           </div>
//         )}

//         {/* Error */}
//         {error && !loading && (
//           <div className="text-center py-20 bg-red-50 rounded-3xl">
//             <p className="text-2xl text-red-600 font-bold">{error}</p>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && epapers.length === 0 && (
//           <div className="text-center py-20 bg-white rounded-3xl shadow">
//             <p className="text-3xl text-gray-500">कोई ई-पेपर नहीं मिला</p>
//             <p className="text-xl text-gray-400 mt-4">
//               {searchDate ? 'इस तारीख का अखबार नहीं है' : 'अभी तक कोई ई-पेपर अपलोड नहीं हुआ'}
//             </p>
//           </div>
//         )}

//         {/* Grid */}
//         {!loading && !error && epapers.length > 0 && (
//           <>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
//               {epapers.map((paper) => (
//                 <div
//                   key={paper._id}
//                   className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
//                 >
//                   <Link href={`/admin/epaper/${paper._id}`}>
//                     <div className="relative aspect-[3/4] bg-gray-100">
//                       <Image
//                         src={paper.thumbnailUrl}
//                         alt={paper.formattedDate}
//                         fill
//                         className="object-cover group-hover:scale-110 transition duration-300"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
//                     </div>
//                     <div className="p-4 bg-gradient-to-r from-[#ee73c4] to-pink-600 text-white text-center">
//                       <p className="font-bold text-lg leading-tight">{paper.formattedDate}</p>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center items-center gap-6 mt-16 flex-wrap">
//                 <button
//                   onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
//                   disabled={currentPage === 1}
//                   className="px-10 py-4 bg-[#ee73c4] text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-600 transition shadow-lg"
//                 >
//                   पिछला
//                 </button>

//                 <span className="text-2xl font-bold text-gray-700">
//                   पेज <span className="text-[#ee73c4]">{currentPage}</span> / {totalPages}
//                 </span>

//                 <button
//                   onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
//                   disabled={currentPage === totalPages}
//                   className="px-10 py-4 bg-[#ee73c4] text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-600 transition shadow-lg"
//                 >
//                   अगला
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }