import { createSlice } from '@reduxjs/toolkit';
import { TCountDown } from 'features/CountDown/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICountDownCategory } from 'features/CountDown/type';
import { initCountDownCategory } from 'features/CountDown/constants';

export interface CountDownState {
  countDown: TCountDown[];
  initCategory: ICountDownCategory[];
  category: ICountDownCategory[];
}

const initialState: CountDownState = {
  countDown: [],
  initCategory: initCountDownCategory,
  category: [],
};

export const countDownSlice = createSlice({
  name: 'countDown',
  initialState,
  reducers: {
    addNewCountDown: (state, action: PayloadAction<TCountDown>) => {
      state.countDown = [...state.countDown, action.payload];
    },
    clearAllCountDown: state => {
      state.countDown = [];
      // state.initCategory = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewCountDown, clearAllCountDown } = countDownSlice.actions;

export default countDownSlice.reducer;
