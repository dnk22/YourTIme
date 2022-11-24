import { createSlice } from '@reduxjs/toolkit';
import { TCountDown } from 'features/CountDown/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICountDownCategory } from 'features/CountDown/type';
import { initCountDownCategory } from 'features/CountDown/constants';
import { randomUniqueId } from 'utils/string';
import { findObjectInArrayById } from 'utils/algorithm';

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
    addOrEditCountDown: (state, action: PayloadAction<TCountDown>) => {
      const { payload } = action;
      if (payload?.id) {
        const { idx, value } = findObjectInArrayById(
          state.countDown,
          payload.id,
        );
        const result = { ...value, ...payload };
        state.countDown[idx] = result;
      } else {
        payload.id = randomUniqueId();
        state.countDown = [...state.countDown, payload];
      }
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
export const { addOrEditCountDown, clearAllCountDown, deleteCountDownById } =
  countDownSlice.actions;

export default countDownSlice.reducer;
