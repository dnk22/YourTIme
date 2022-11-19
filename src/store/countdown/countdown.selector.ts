import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { findObjectInArrayById } from 'utils/algorithm/index';

const countdownState = (state: RootState) => state.countDown;

export const getMapIdCountDownCategory = createSelector(
  countdownState,
  item => {
    [...item.initCategory, ...item.category].map(x => x.id);
  },
);

export const selectAllCountDown = createSelector(
  countdownState,
  items => items.countDown,
);

export const selectAllCountDownCategory = createSelector(
  countdownState,
  item => item.initCategory,
);

export const selectCountDownCategoryByUser = createSelector(
  countdownState,
  item => item.category,
);

export const getMapIDCountDown = createSelector(selectAllCountDown, item => {
  return item.map(x => x.id);
});

export const selectCountDownById = createSelector(
  [
    // Usual first input - extract value from `state`
    selectAllCountDown,
    // Take the second arg, `countdownId`, and forward to the output selector
    (_, countdownId) => countdownId,
  ],
  // Output selector gets (`items, countdownId)` as args
  (items, countdownId) => {
    return findObjectInArrayById(items, countdownId);
  },
);
