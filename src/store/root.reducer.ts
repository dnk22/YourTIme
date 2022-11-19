import { combineReducers } from '@reduxjs/toolkit';

import appReducer from './app/app.slice';
import countdownReducer from './countDown/countDown.slice';

export const allReducer = combineReducers({
  app: appReducer,
  countDown: countdownReducer,
});
