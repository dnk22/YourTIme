import { createSelector } from '@reduxjs/toolkit';
import { findObjectInArrayById } from 'utils/algorithm';
import { RootState } from '../index';

const reminderState = (state: RootState) => state.reminder;

export const getMapIdReminderCategory = createSelector(reminderState, item => {
  [...item.initCategory, ...item.category].map(function (x) {
    return x.id;
  });
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

export const selectReminderCategoryById = (state: RootState, id: string) =>
  createSelector(reminderState, item =>
    findObjectInArrayById([...item.initCategory, ...item.category], id),
  );
