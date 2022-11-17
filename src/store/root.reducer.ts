import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './app/app.slice';
import countdownReducer from './countdown/countdown.slice';

export const allReducer = combineReducers({
  app: appReducer,
  countdown: countdownReducer,
});
