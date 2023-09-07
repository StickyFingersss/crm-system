import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { AxiosResponse } from 'axios';
axios.defaults.withCredentials = true;

import { CommentType, CommentsType, CustomersType, InputsType, TodosType } from '../types';

export const fetchTodos = createAsyncThunk('todos/all', async () => {
  const response = await axios.get<TodosType>(
    `${import.meta.env.VITE_URL}/todos`
  );
  return response.data;
});

//Все кастомеры
export const fetchAllCustomers = createAsyncThunk('customer/all', async () => {
  const response = await axios.get<CustomersType>('http://localhost:3000/api/customer/all');
  return response.data;
});

//создаёт 1 CUMент
export const fetchAddComment = createAsyncThunk('comment/one', async (dataInput: InputsType) => {
  const response = await axios.post<InputsType, AxiosResponse<CommentType>>(
    'http://localhost:3000/api/customer/comment/create',
    dataInput,
  );
  return response.data;
});

//Все CUMентарии
export const fetchAllComments = createAsyncThunk('comment/all', async () => {
  const response = await axios.get<InputsType, AxiosResponse<CommentsType>>(
    'http://localhost:3000/api/customer/comment/all');
  return response.data;
});
