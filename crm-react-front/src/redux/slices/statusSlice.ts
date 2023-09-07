import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../../types';
import { fetchAllStatuses, fetchAddStatus, fetchDelStatus } from '../thunkActions/statusesActions';

const initialState: SliceStateType = {
  statuses: [],
};

const statusesSlice = createSlice({
  name: 'statusesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllStatuses.fulfilled, (state, action) => {
      state.statuses = action.payload;
    });
    builder.addCase(fetchAddStatus.fulfilled, (state, action) => {
      state.statuses.push(action.payload);
    });
    builder.addCase(fetchDelStatus.fulfilled, (state, action) => {
      state.statuses = state.statuses.filter((status) => status.id!== action.payload);
    });
  },
});

export default statusesSlice.reducer;