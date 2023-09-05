import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from './store';

type DispatchFunc = () => ThunkDispatch<RootState, any, AnyAction>;

export const useMyDispatch: DispatchFunc = useDispatch;
export const useMySelector: TypedUseSelectorHook<RootState> = useSelector;
