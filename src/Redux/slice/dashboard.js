import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import dashboardServices from '../api/dashboardServices';

export const initialState = {
  data: {},
  loading: 'idle',
  error: null,
  message: null,
};

export const getDashboardData = createAsyncThunk('dashboard/getDashboardData', async () => {
  try {
    const res = await dashboardServices.getDashData();

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(getDashboardData.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default dashboardSlice.reducer;
