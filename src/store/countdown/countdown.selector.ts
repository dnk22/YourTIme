import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { findObjectInArrayById } from 'utils/algorithm/index';

const reminderState = (state: RootState) => state.countdown;

export const getMapIdCountDownCategory = createSelector(reminderState, item => {
  [...item.initCategory, ...item.category].map(x => x.id);
});

export const selectAllCountDown = createSelector(
  reminderState,
  items => items.reminder,
);

export const selectAllCountDownCategory = createSelector(
  reminderState,
  item => item.initCategory,
);

export const selectCountDownCategoryByUser = createSelector(
  reminderState,
  item => item.category,
);

export const getMapIDCountDown = createSelector(selectAllCountDown, item => {
  return item.map(x => x.id);
});

export const selectCountDownById = createSelector(
  [
    // Usual first input - extract value from `state`
    selectAllCountDown,
    // Take the second arg, `countDownId`, and forward to the output selector
    (_, countDownId) => countDownId,
  ],
  // Output selector gets (`items, countDownId)` as args
  (items, countDownId) => {
    return findObjectInArrayById(items, countDownId);
  },
);
