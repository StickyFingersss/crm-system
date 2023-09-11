import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchCalls } from './thunkActions';

const initialState: SliceStateType = {
  statsCalls: [],
  isLoading: false,
};

const callsSlice = createSlice({
  name: 'callsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      state.statsCalls = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCalls.pending, (state, action) => {
      state.statsCalls = [];

      state.isLoading = true;
    });
    builder.addCase(fetchCalls.rejected, (state, action) => {
      state.statsCalls = [];
      state.isLoading = false;
    });
  },
});

export default callsSlice.reducer;