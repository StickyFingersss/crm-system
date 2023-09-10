import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../../types';
import { fetchAddDeal } from '../thunkActions/dealsActions'

const initialState: SliceStateType = {
  deals: [],
};

const dealSlice = createSlice({
  name: 'dealsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddDeal.fulfilled, (state, action) => {
      state.deals?.push(action.payload);
    });
  },
});

export default dealSlice.reducer;