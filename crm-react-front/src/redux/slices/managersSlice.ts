import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IManager {
  id: number;
  name: string;
  login: string;
  password: string;
  isAdmin: boolean;
  team_id: number;
  createdAt: object | null;
  updatedAt: object | null;
}

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
      });
  },
});

export const { removeManager } = managerSlice.actions;

export default managerSlice.reducer;
