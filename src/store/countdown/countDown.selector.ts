import {
  countDownAdapter,
  TCountDownSlice,
  countDownSlice,
  categoryAdapter,
} from './countDown.slice';

// export selectors
export const countDownSelectors =
  countDownAdapter.getSelectors<TCountDownSlice>(
    state => state[countDownSlice.name].countDown,
  );

export const countDownCategorySelectors =
  categoryAdapter.getSelectors<TCountDownSlice>(
    state => state[countDownSlice.name].category,
  );
