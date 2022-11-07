import { configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import appReducer from './app/app.slice';
import reminderReducer from './reminder/reminder.slice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    reminder: reminderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
