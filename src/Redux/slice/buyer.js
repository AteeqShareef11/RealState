import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import buyerServices from '../api/buyerServices';

export const initialState = {
  data: [],
  loading: 'idle',
  error: null,
  message: null,
};

export const createPlotOwner = createAsyncThunk('plot/createPlotOwner', async (data) => {
  try {
    const res = await buyerServices.createPlotOwner(data);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getAllCustomers = createAsyncThunk('plot/getAllCustomers', async () => {
  try {
    const res = await buyerServices.getCustomers();

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const searchBuyer = createAsyncThunk('plot/searchBuyer', async (data) => {
  try {
    const res = await buyerServices.searchBuyer(data);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const getCustomersById = createAsyncThunk('plot/getCustomersById', async (id) => {
  try {
    const res = await buyerServices.getCustomersById(id);

    return res.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return error.message;
  }
});

export const buyerSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPlotOwner.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(createPlotOwner.fulfilled, (state) => {
      state.loading = 'idle';
    });
    builder.addCase(createPlotOwner.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getAllCustomers.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.data = action.payload;
    });
    builder.addCase(getAllCustomers.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(searchBuyer.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(searchBuyer.fulfilled, (state) => {
      state.loading = 'idle';
    });
    builder.addCase(searchBuyer.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });

    builder.addCase(getCustomersById.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(getCustomersById.fulfilled, (state) => {
      state.loading = 'idle';
    });
    builder.addCase(getCustomersById.rejected, (state, action) => {
      state.loading = 'rejected';
      state.message = action.payload;
    });
  },
});

export default buyerSlice.reducer;
