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
    deleteCountDownById: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.countDown = state.countDown.filter(x => x.id !== payload);
    },
    clearAllCountDown: state => {
      state.countDown = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewCountDown, clearAllCountDown, deleteCountDownById } =
  countDownSlice.actions;

export default countDownSlice.reducer;
