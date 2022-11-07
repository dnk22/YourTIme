import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './app/app.slice';
import reminderReducer from './reminder/reminder.slice';

export const allReducer = combineReducers({
  app: appReducer,
  reminder: reminderReducer,
});
