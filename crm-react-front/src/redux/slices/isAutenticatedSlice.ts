import { createSlice } from '@reduxjs/toolkit';
import { fetchIsAutenticated } from '../thunkIsAutenticated';

const initialState = {
  session: {},
};

export const isAutenticatedSlice = createSlice({
  name: 'isAutenticatedSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIsAutenticated.fulfilled, (state, action) => {
      state.session = action.payload;
    });
  },
});

export default isAutenticatedSlice.reducer;
