import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchTodos } from './thunkActions';

const initialState: SliceStateType = {
  todos: [],
};

const rtkSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export default rtkSlice.reducer;
