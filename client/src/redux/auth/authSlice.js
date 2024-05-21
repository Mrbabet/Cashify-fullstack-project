import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshToken } from "./operations.js";

const initialState = {
  loading: false,
  isLoggedIn: false,
  isRefreshing: false,
  isRegistered: false,
  error: null,
  accessToken: null,
  refreshToken: null,
  id: null,
  balance: null,
  email: null,
};

const handlePending = (state) => {
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const isPendingAction = (action) => {
  return action.type.endsWith("/pending");
};
const isRejectAction = (action) => {
  return action.type.endsWith("/rejected");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.id = action.payload.id;
        state.isRegistered = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.balance = action.payload.userData.balance;
        state.email = action.payload.userData.email;
        state.id = action.payload.userData.id;
        state.transactions = action.payload.userData.transactions;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(refreshToken.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
