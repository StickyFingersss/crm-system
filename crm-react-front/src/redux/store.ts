import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import todoSlice from './todoSlice';
import callsSlice from './callsSlice';
import isAutenticatedSlice from './slices/isAutenticatedSlice';

import managers from './slices/managersSlice';
import type { SliceStateType } from '../types';

import { IManager } from '../types';

type PreloadState = {
  isLoggedInSlice: any;
  todoSlice: SliceStateType;
  callsSlice: SliceStateType;
  managers: IManager;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    todoSlice,
    callsSlice,
    managers,
    isAutenticatedSlice,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
