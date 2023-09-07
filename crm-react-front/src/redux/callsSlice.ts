import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchCalls } from './thunkActions';

const initialState: SliceStateType = {
  calls: [],
};

const callsSlice = createSlice({
  name: 'callsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      state.calls = action.payload;
    });
  },
});

export default callsSlice.reducer;