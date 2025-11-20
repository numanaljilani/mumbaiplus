// store/features/epaper/epaperSlice.js
import { createSlice } from '@reduxjs/toolkit';

const epaperSlice = createSlice({
  name: 'epaper',
  initialState: {
    epapers: [],
    currentEPaper: null,
    loading: false,
    error: null,
  },
  reducers: {
    setEPapers: (state, action) => {
      state.epapers = action.payload;
    },
    setCurrentEPaper: (state, action) => {
      state.currentEPaper = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEPapers, setCurrentEPaper, setLoading, setError } = epaperSlice.actions;
export default epaperSlice.reducer;