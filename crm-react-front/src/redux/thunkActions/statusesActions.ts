import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { InputStatusType, StatusType, StatusesType } from '../../types';

export const fetchAllStatuses = createAsyncThunk('statuses/all', async () => {
  const response = await axios.get<StatusesType>(
    `${import.meta.env.VITE_URL}/status/all`,
  );
  return response.data;
});

export const fetchAddStatus = createAsyncThunk('statuses/add', async (inputStatus: InputStatusType) => {
  const response = await axios.post<InputStatusType, AxiosResponse<StatusType>>(
    `${import.meta.env.VITE_URL}/status`,
    inputStatus,
  );
  return response.data;
});

export const fetchDelStatus = createAsyncThunk('statuses/del', async (id: number) => {
  const response = await axios.delete(`${import.meta.env.VITE_URL}/status/${id}`);
  if (response.status === 200) {
    return id;
  }
})