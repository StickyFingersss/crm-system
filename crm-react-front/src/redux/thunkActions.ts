import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { AxiosResponse } from 'axios';
import {
  CallsType,
  IManager,
  InputManagerType,
  CommentType,
  CommentsType,
  CustomersType,
  InputsType,
  TodosType,
  CustomerType,
  InputsCommentType,
} from '../types';

export const fetchTodos = createAsyncThunk('todos/all', async () => {
  const response = await axios.get<TodosType>(
    `${import.meta.env.VITE_URL}/todos`
  );
  return response.data;
});

//Все кастомеры
export const fetchAllCustomers = createAsyncThunk('customer/all', async () => {
  const response = await axios.get<CustomersType>(
    'http://localhost:3000/api/customer/all'
  );
  return response.data;
});

//Один кастомер
export const fetchOneCustomer = createAsyncThunk(
  'customer/one',
  async (id: number) => {
    const response = await axios.get<CustomerType>(
      `http://localhost:3000/api/customer/${id}`
    );
    return response.data;
  }
);

//создаёт 1 CUMент
export const fetchAddComment = createAsyncThunk(
  'comment/one',
  async (dataInput: InputsCommentType) => {
    const response = await axios.post<
      InputsCommentType,
      AxiosResponse<CommentType>
    >('http://localhost:3000/api/customer/comment/create', dataInput);
    return response.data;
  }
);

//Все CUMентарии
export const fetchAllComments = createAsyncThunk('comment/all', async () => {
  const response = await axios.get<InputsType, AxiosResponse<CommentsType>>(
    'http://localhost:3000/api/customer/comment/all'
  );
  return response.data;
});

export const fetchAddTodo = createAsyncThunk(
  'todos/add',
  async (inputs: InputsType) => {
    const response = await axios.post<InputsType, AxiosResponse<TodosType>>(
      `${import.meta.env.VITE_URL}/todos`,
      inputs
    );
    return response.data;
  }
);

export const fetchDel = createAsyncThunk('todos/del', async (id: number) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_URL}/todos/${id}`
  );
  if (response.status === 200) {
    return id;
  }
});

export const fetchEdit = createAsyncThunk(
  'todos/edit',
  async (inputs: InputsType) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_URL}/todos/${inputs.id}`,
      inputs
      // { withCredentials: true }
    );
    if (response.status === 200) {
      return response.data;
    }
  }
);

export const fetchNewStatus = createAsyncThunk(
  'todos/changeStatus',
  async (todo: TodoType) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_URL}/todos/${todo.id}`,
      todo
      // { withCredentials: true }
    );
    if (response.status === 200) {
      return todo.id;
    }
  }
);

export const fetchCalls = createAsyncThunk('calls/all', async () => {
  const response = await axios.get<CallsType>(
    `${import.meta.env.VITE_URL}/calls/report`
  );
  return response.data;
});

export const fetchAddOneManager = createAsyncThunk(
  'managers/create',
  async (inputs: InputManagerType) => {
    const response = await axios.post<
      InputManagerType,
      AxiosResponse<IManager>
    >(`${import.meta.env.VITE_URL}/managers`, inputs);
    return response.data;
  }
);
