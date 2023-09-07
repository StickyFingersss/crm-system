import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import todoSlice from './todoSlice';
import callsSlice from './callsSlice';

import managers from './slices/managersSlice';
import type { SliceStateType, StatusesType } from '../types';

import { IManager } from '../types';
import statusSlice from './slices/statusSlice';

type PreloadState = {
  todoSlice: SliceStateType;
  callsSlice: SliceStateType;
  managers: IManager;
  statusSlice: SliceStateType;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    todoSlice,
    callsSlice,
    statusSlice,
    managers,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
