import { createSlice } from '@reduxjs/toolkit';
import { TReminder } from 'features/CountDown/type';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IReminderCategory } from 'features/CountDown/type';
import { initReminderCategory } from 'features/CountDown/constants';

export interface ReminderState {
  reminder: TReminder[];
  initCategory: IReminderCategory[];
  category: IReminderCategory[];
}

const initialState: ReminderState = {
  reminder: [],
  initCategory: initReminderCategory,
  category: [],
};

export const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    addNewReminder: (state, action: PayloadAction<TReminder>) => {
      state.reminder = [...state.reminder, action.payload];
    },
    clearAllReminder: state => {
      state.reminder = [];
      // state.initCategory = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewReminder, clearAllReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
