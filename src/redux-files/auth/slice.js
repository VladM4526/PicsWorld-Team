import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterRateThunk,
  refreshUserAccount,
  signInThunk,
  updateAvatarUser,
} from './thunk';

// add name after login or registration
const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatarURL: null,
    gender: null,
    waterRate: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.selectIsLoggedIn = true;
      })

      .addCase(refreshUserAccount.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.selectIsLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserAccount.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(addWaterRateThunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.selectIsLoggedIn = true;
        state.user.waterRate = payload;
      })
      .addCase(updateAvatarUser.fulfilled, updateAvatarUser);
  },
});

export const authReducer = authSlice.reducer;
