import { createSlice } from '@reduxjs/toolkit';
import { SliceStateType } from '../types';
import { fetchAddTodo, fetchDel, fetchEdit, fetchNewStatus, fetchTodos } from './thunkActions';

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
    builder.addCase(fetchTodos.rejected, (state) => {
      state.todos = [];
    });
    builder.addCase(fetchAddTodo.fulfilled, (state, action) => {
      state.todos?.unshift(action.payload);
    });
    builder.addCase(fetchDel.fulfilled, (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    });
    builder.addCase(fetchEdit.fulfilled, (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    });
    builder.addCase(fetchNewStatus.fulfilled, (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, status: !el.status } : el
      );
    });
  },
});

export default rtkSlice.reducer;
