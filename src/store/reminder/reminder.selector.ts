import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

const reminderState = (state: RootState) => state.reminder;

export const selectAllReminder = createSelector(
  reminderState,
  items => items.reminder,
);
