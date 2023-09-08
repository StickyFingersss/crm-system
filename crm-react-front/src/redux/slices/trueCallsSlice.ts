import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../../types';
import { fetchAddCall } from '../thunkActions/callsActions';

const initialState: SliceStateType = {
  calls: [],
};

const callsSlice = createSlice({
  name: 'trueCallsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddCall.fulfilled, (state, action) => {
      state.calls.push(action.payload);
    });
  },
});

export default callsSlice.reducer;