import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchAllCustomers } from './thunkActions';

const initialState: SliceStateType = {
  customers: [],
};

const rtkSlice = createSlice({
  name: 'customerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
    });
  },
});

export default rtkSlice.reducer;