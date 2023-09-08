import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { CallCreateType } from '../../types';

export const fetchAddCall = createAsyncThunk('calls/create', async (id: number) => {
  const response = await axios.post<number, AxiosResponse<CallCreateType>>(
    `${import.meta.env.VITE_URL}/calls/${id}/create`,
  );
  return response.data;
});