import { createSlice } from '@reduxjs/toolkit';
import { TReminder } from 'features/Dashboard/type';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ReminderState {
  reminder: TReminder[];
}

const initialState: ReminderState = {
  reminder: [],
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewReminder, clearAllReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
