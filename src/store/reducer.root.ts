import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { reduxPersistStorage } from 'share/storage';

import appReducer from './app/app.slice';
import countdownReducer from './countDown/countDown.slice';

const appPersistConfig = {
  key: 'root',
  version: 1,
  storage: reduxPersistStorage,
  blacklist: ['countDown'],
};

const countDownPersistConfig = {
  key: 'countDown',
  version: 1,
  storage: reduxPersistStorage,
  blacklist: ['initCategory'],
};

const allReducer = combineReducers({
  app: appReducer,
  countDown: persistReducer(countDownPersistConfig, countdownReducer),
});

export const persistedReducer = persistReducer(appPersistConfig, allReducer);
