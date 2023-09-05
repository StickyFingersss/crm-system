import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AxiosResponse } from 'axios';
import { TodosType } from '../types';

export const fetchTodos = createAsyncThunk('todos/all', async () => {
  const response = await axios.get<TodosType>(
    `${import.meta.env.VITE_URL}/todos`
  );
  return response.data;
});
