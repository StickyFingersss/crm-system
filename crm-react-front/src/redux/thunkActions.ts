import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { AxiosResponse } from 'axios';
axios.defaults.withCredentials = true;

import { CallsType, IManager, InputManagerType, CommentType, CommentsType, CustomersType, InputsType, TodosType, CustomerType } from '../types';

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

//Один кастомер
export const fetchOneCustomer = createAsyncThunk('customer/one', async (id: number) => {
  const response = await axios.get<CustomerType>(`http://localhost:3000/api/customer/${id}`);
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

export const fetchCalls = createAsyncThunk('calls/all', async () => {
  const response = await axios.get<CallsType>(
    `${import.meta.env.VITE_URL}/calls/report`
  );
  return response.data;
})

export const fetchAddOneManager = createAsyncThunk('managers/create', async (inputs: InputManagerType) => {
  const response = await axios.post<InputManagerType, AxiosResponse<IManager>>(`${import.meta.env.VITE_URL}/managers`,
    inputs,
  );
  return response.data;
})