// components/admin/EditPostDialog.jsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useUpdatePostMutation } from '../../service/api/api';
import { toast } from 'sonner';

const schema = z.object({
  title: z.string().min(5, 'शीर्षक कम से कम 5 अक्षर का हो'),
  content: z.string().min(20, 'कंटेंट कम से कम 20 अक्षर का हो'),
});

export default function EditPostDialog({ post, isOpen, onClose }) {
  const [updatePost] = useUpdatePostMutation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { title: post.title, content: post.content },
  });

  const onSubmit = async (data) => {
    try {
      await updatePost({ id: post._id, ...data }).unwrap();
      toast.success('पोस्ट अपडेट हो गई!');
      onClose();
    } catch {
      toast.error('अपडेट नहीं हो सकी');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-[#ee73c4] to-pink-600 text-white p-6 text-center">
          <h2 className="text-3xl font-bold">पोस्ट एडिट करें</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
          <div>
            <label className="block text-xl font-bold mb-3">शीर्षक</label>
            <input
              {...register('title')}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-[#ee73c4] outline-none"
            />
            {errors.title && <p className="text-red-600 mt-2">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-xl font-bold mb-3">कंटेंट</label>
            <textarea
              {...register('content')}
              rows={8}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-[#ee73c4] outline-none resize-none"
            />
            {errors.content && <p className="text-red-600 mt-2">{errors.content.message}</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#ee73c4] text-white py-4 rounded-xl font-bold hover:bg-pink-600 transition"
            >
              अपडेट करें
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-800 py-4 rounded-xl font-bold hover:bg-gray-400 transition"
            >
              कैंसिल
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}