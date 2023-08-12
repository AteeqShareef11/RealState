import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import userServices from '../api/userServices';

export const initialState = {
  data: [],
  loading: 'idle',
  error: null,
  message: null,
};

export const loginUser = createAsyncThunk('login/loginUser', async (data) => {
  try {
    const res = await userServices.loginUser(data);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default userSlice.reducer;
