import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { IManager } from '../../types';
import { fetchAddOneManager } from '../thunkActions';

export const fetchManagers = createAsyncThunk('managers/fetchManagers', async (thunkAPI) => {
  try {
    const { data } = await axios.get<IManager[]>('http://localhost:3000/api/managers');

    return data;
  } catch (err) {
    console.log(err);
  }
});


export interface CounterState {
  managers: [];
}

const initialState: CounterState = {
  managers: [],
};

export const managerSlice = createSlice({
  name: 'managers',
  initialState,
  reducers: {
    removeManager(state, action) {
      state.managers = state.managers.filter((obj) => obj.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManagers.pending, (state) => {
        state.status = 'loading';
        state.managers = [];
      })
      .addCase(fetchManagers.fulfilled, (state, action) => {
        state.managers = action.payload;
        state.status = 'success';
      })
      .addCase(fetchManagers.rejected, (state) => {
        state.status = 'error';
        state.managers = [];
      })
      .addCase(fetchAddOneManager.fulfilled, (state, action) => {
        state.managers.push(action.payload);
      });
  },
});

export const { removeManager } = managerSlice.actions;

export default managerSlice.reducer;
