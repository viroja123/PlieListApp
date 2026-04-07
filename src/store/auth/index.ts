import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null as any,
    loading: false,
    isLoggedIn: false,
    error: null as any,
  },

  reducers: {
    loginStart: state => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },

    logout: state => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;