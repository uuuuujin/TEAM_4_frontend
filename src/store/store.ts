import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { multiMiddleware } from './middlewares/multi.middleware';
import counterReducer from './modules/counter/counter.slice';
import multiReducer from './modules/multi/multi.slice';
import mainReducer from './modules/main/main.slice';
import modalReducer from './modules/modal/modal.slice';
import TimerReducer from './modules/timer/timer.slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['main'],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  multi: multiReducer,
  main: mainReducer,
  modal: modalReducer,
  timer: TimerReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([multiMiddleware]),
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([multiMiddleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
