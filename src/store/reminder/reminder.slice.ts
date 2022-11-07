import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TReminder } from 'features/Dashboard/type';

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
      console.log(action);
      state.reminder = [...state.reminder, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewReminder } = reminderSlice.actions;

export default reminderSlice.reducer;
