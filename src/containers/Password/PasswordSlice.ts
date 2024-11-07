import { createSlice } from '@reduxjs/toolkit';

interface PasswordState {
  value: number;
}

const initialState: PasswordState = {
  value: 123,
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addNumber: (state, action) => {
      return state.value + 1;
    }
  },
});

export const passwordReducer = passwordSlice.reducer;

export const {addNumber} = passwordSlice.actions;