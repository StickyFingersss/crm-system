import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import todoSlice from './todoSlice';
import counterReducer from './slices/counterSlice';
import managers from './slices/managersSlice';
import type { SliceStateType } from '../types';

type PreloadState = {
  todoSlice: SliceStateType;
  counter: number;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    todoSlice,
    counter: counterReducer,
    managers,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
