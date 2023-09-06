import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import todoSlice from './todoSlice';
import callsSlice from './callsSlice';
import type { SliceStateType } from '../types';

type PreloadState = {
  todoSlice: SliceStateType;
  callsSlice: SliceStateType;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    todoSlice,
    callsSlice
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
