import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from '../containers/Password/PasswordSlice.ts';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
  }
});

export type RootState = ReturnType<typeof store.dispatch>;
