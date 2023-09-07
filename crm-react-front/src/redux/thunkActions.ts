import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { AxiosResponse } from 'axios';
import {
  InputsType,
  TodoItemProps,
  TodoType,
  CallsType,
  TodosType,
} from '../types';

export const fetchTodos = createAsyncThunk('todos/all', async () => {
  const response = await axios.get<TodosType>(
    `${import.meta.env.VITE_URL}/todos`
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
