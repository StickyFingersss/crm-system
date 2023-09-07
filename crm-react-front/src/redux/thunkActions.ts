import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AxiosResponse } from 'axios';
import { CallsType, TodosType } from '../types';

export const fetchTodos = createAsyncThunk('todos/all', async () => {
  const response = await axios.get<TodosType>(
    `${import.meta.env.VITE_URL}/todos`
  );
  return response.data;
});

export const fetchCalls = createAsyncThunk('calls/all', async () => {
  const response = await axios.get<CallsType>(
    `${import.meta.env.VITE_URL}/calls/report`
  );
  return response.data;
})