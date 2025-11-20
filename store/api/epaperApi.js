// store/api/epaperApi.js
import { apiSlice } from './apiSlice';

export const epaperApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEPapers: builder.query({
      query: ({ search, page }) => `/epaper?search=${search}&page=${page}`,
      providesTags: ['EPaper'],
    }),
    uploadEPaper: builder.mutation({
      query: (formData) => ({
        url: '/epaper',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['EPaper'],
    }),
  }),
});

export const { useGetEPapersQuery, useUploadEPaperMutation } = epaperApi;