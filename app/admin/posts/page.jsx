// app/admin/posts/page.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { useGetAllPostsQuery, useApprovePostMutation, useDeletePostMutation } from '../../../service/api/api';
import { toast } from 'sonner';
import EditPostDialog from '@/components/admin/EditPostDialog';

export default function AdminPostsPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('pending'); // pending, approved, all
  const [selectedPost, setSelectedPost] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { data, isLoading } = useGetAllPostsQuery({ search, status: statusFilter });
  const [approvePost] = useApprovePostMutation();
  const [deletePost] = useDeletePostMutation();

  const posts = data?.posts || [];
  const total = data?.total || 0;

  const handleApprove = async (id) => {
    try {
      await approvePost(id).unwrap();
      toast.success('पोस्ट अप्रूव हो गई!');
    } catch {
      toast.error('कुछ गलत हुआ');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('क्या आप इस पोस्ट को डिलीट करना चाहते हैं?')) return;
    try {
      await deletePost(id).unwrap();
      toast.success('पोस्ट डिलीट हो गई');
    } catch {
      toast.error('डिलीट नहीं हो सकी');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-[#ee73c4] mb-3">पोस्ट अप्रूवल डैशबोर्ड</h1>
          <p className="text-xl text-gray-600">यहाँ सभी यूज़र पोस्ट्स को अप्रूव या रिजेक्ट करें</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="पोस्ट सर्च करें..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-[#ee73c4] outline-none"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-[#ee73c4] outline-none"
            >
              <option value="pending">पेंडिंग</option>
              <option value="approved">अप्रूव्ड</option>
              <option value="all">सभी</option>
            </select>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-8 border-[#ee73c4] border-t-transparent"></div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-l-8 ${
                post.status === 'approved' ? 'border-green-500' : 'border-yellow-500'
              }`}
            >
              {/* Image */}
              {post.images?.[0] && (
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={post.images[0]}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full font-bold">
                    {post.status === 'approved' ? 'अप्रूव्ड' : 'पेंडिंग'}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>

                <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                  <span>द्वारा: {post.author?.name || 'अज्ञात'}</span>
                  <span>•</span>
                  <span>{format(new Date(post.createdAt), 'dd MMM yyyy')}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {post.status === 'pending' && (
                    <button
                      onClick={() => handleApprove(post._id)}
                      className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
                    >
                      अप्रूव करें
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      setIsEditOpen(true);
                    }}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                  >
                    एडिट
                  </button>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition"
                  >
                    डिलीट
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!isLoading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-3xl text-gray-500">कोई पोस्ट नहीं मिली</p>
          </div>
        )}
      </div>

      {/* Edit Dialog */}
      {selectedPost && (
        <EditPostDialog
          post={selectedPost}
          isOpen={isEditOpen}
          onClose={() => {
            setIsEditOpen(false);
            setSelectedPost(null);
          }}
        />
      )}
    </div>
  );
}