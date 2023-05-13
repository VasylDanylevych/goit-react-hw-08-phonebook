import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
};

const handleRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};
const handleLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};

const handleLogout = (state, action) => {
  state.user = { name: null, email: null };
  state.token = '';
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleRegister)
      .addCase(logInThunk.fulfilled, handleLogin)
      .addCase(logOutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
