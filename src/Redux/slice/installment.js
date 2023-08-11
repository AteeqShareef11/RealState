import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import installmentServices from '../api/installmentServices';

export const initialState = {
  data: [],
  installmentDetail: {},
  loading: 'idle',
  error: null,
  message: null,
};

export const createInstallment = createAsyncThunk('plot/createInstallment', async (datas) => {
  const { data, id } = datas;
  try {
    const res = await installmentServices.createInstallment(data, id);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getBuyerInstallment = createAsyncThunk('plot/getBuyerInstallment', async (id) => {
  try {
    const res = await installmentServices.getBuyerInstallment(id);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getInstallmentbyMonth = createAsyncThunk('plot/getInstallmentbyMonth', async () => {
  try {
    const res = await installmentServices.getInstallmentbyMonth();

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getInstallmentDetail = createAsyncThunk('plot/getInstallmentDetail', async () => {
  try {
    const res = await installmentServices.getInstallmentDetail();

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const installmentSlice = createSlice({
  name: 'installment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createInstallment.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(createInstallment.fulfilled, (state) => {
      state.loading = 'idle';
    });
    builder.addCase(createInstallment.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getBuyerInstallment.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getBuyerInstallment.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.installmentDetail = action.payload;
    });
    builder.addCase(getBuyerInstallment.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getInstallmentbyMonth.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getInstallmentbyMonth.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(getInstallmentbyMonth.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getInstallmentDetail.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getInstallmentDetail.fulfilled, (state) => {
      state.loading = 'idle';
    });
    builder.addCase(getInstallmentDetail.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default installmentSlice.reducer;
