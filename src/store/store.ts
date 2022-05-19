import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { multiMiddleware } from './middlewares/multi.middleware';
import counterReducer from './modules/counter/counter.slice';
import multiReducer from './modules/multi/multi.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    multi: multiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, multiMiddleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
