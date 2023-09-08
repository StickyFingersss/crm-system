import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchAllCustomers, fetchOneCustomer } from './thunkActions';

const initialState: SliceStateType = {
  customers: [],
  customer: {
    id: 0,
    name: '',
    balance: 0,
    phone:'',
    email: '',
    status: '',
    manager_id: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const rtkSlice = createSlice({
  name: 'customerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
    });
    builder.addCase(fetchOneCustomer.fulfilled, (state, action) => {
      state.customer = action.payload;
    });
  },
});

export default rtkSlice.reducer;