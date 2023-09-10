import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { DealBodyType, DealType, InputDealType } from '../../types';

export const fetchAddDeal = createAsyncThunk('deals/create', async (bodyDeal: DealBodyType) => {
  const response = await axios.post<InputDealType, AxiosResponse<DealType>>(
    `${import.meta.env.VITE_URL}/deal/${bodyDeal.id}`,
    bodyDeal.inputDeal
  );
  return response.data;
});