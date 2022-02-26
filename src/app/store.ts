import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sampleReducer from './sampleSlice';

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
