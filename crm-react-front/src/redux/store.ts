import { configureStore } from '@reduxjs/toolkit';
import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

import type { SliceStateType } from '../types';
import todoSlice from './todoSlice';
import customerSlice from './customerSlice';
import commentSlice from './commentSlice';

type PreloadState = {
  todoSlice: SliceStateType;
  customerSlice: SliceStateType;
  commentSlice: SliceStateType;
};

const storeOptions: ConfigureStoreOptions<PreloadState> = {
  reducer: {
    todoSlice,
    customerSlice,
    commentSlice,
  },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
