import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordState {
  enteredPassword: string;
  status: | 'granted' | 'denied'| 'neutral';
}

const initialState: PasswordState = {
  enteredPassword: '',
  status: 'neutral',
}

const correctPassword = '1234';

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    addNumber: (state, action : PayloadAction<string>) => {
      if(state.enteredPassword.length < 4){
        state.enteredPassword += action.payload;
      }
    },
    deleteNumber: (state) => {
      state.enteredPassword = state.enteredPassword.slice(0, -1);
    },
    checkPassword: (state) => {
      if (state.enteredPassword === correctPassword) {
        state.status = 'granted';
      } else {
        state.status = 'denied';
      }
    },
    resetPassword: (state) => {
      return  initialState;
    }
  },
});

export const passwordReducer = passwordSlice.reducer;

export const {addNumber, deleteNumber, resetPassword, checkPassword} = passwordSlice.actions;