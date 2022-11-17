import { createSlice } from '@reduxjs/toolkit';
import { TCountDown } from 'features/CountDown/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICountDownCategory } from 'features/CountDown/type';
import { initCountDownCategory } from 'features/CountDown/constants';

export interface CountDownState {
  reminder: TCountDown[];
  initCategory: ICountDownCategory[];
  category: ICountDownCategory[];
}

const initialState: CountDownState = {
  reminder: [],
  initCategory: initCountDownCategory,
  category: [],
};

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    addNewCountDown: (state, action: PayloadAction<TCountDown>) => {
      state.reminder = [...state.reminder, action.payload];
    },
    clearAllCountDown: state => {
      state.reminder = [];
      // state.initCategory = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewCountDown, clearAllCountDown } = reminderSlice.actions;

export default reminderSlice.reducer;
