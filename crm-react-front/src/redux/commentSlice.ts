import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchAddComment, fetchAllComments } from './thunkActions';

const initialState: SliceStateType = {
  comments: [],
};

const rtkSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(fetchAddComment.fulfilled, (state, action) => {
      state.comments?.push(action.payload);
    });
  },
});

export default rtkSlice.reducer;