import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { findObjectInArrayById } from 'utils/algorithm/index';

const reminderState = (state: RootState) => state.reminder;

export const getMapIdReminderCategory = createSelector(reminderState, item => {
  [...item.initCategory, ...item.category].map(x => x.id);
});

export const selectAllReminder = createSelector(
  reminderState,
  items => items.reminder,
);

export const selectAllReminderCategory = createSelector(
  reminderState,
  item => item.initCategory,
);

export const selectReminderCategoryByUser = createSelector(
  reminderState,
  item => item.category,
);

export const getMapIDCountDown = createSelector(selectAllReminder, item => {
  return item.map(x => x.id);
});

export const selectCountDownById = createSelector(
  [
    // Usual first input - extract value from `state`
    selectAllReminder,
    // Take the second arg, `countDownId`, and forward to the output selector
    (_, countDownId) => countDownId,
  ],
  // Output selector gets (`items, countDownId)` as args
  (items, countDownId) => {
    return findObjectInArrayById(items, countDownId);
  },
);
