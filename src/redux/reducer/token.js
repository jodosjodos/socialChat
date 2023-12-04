import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/user";

const initialState = {
  loading: false,

  tokens: {}, // Corrected the property name
  isAuthenticated: false,
  error: null,
};

const tokenSlice = createSlice({
  name: "tokenReducer",
  initialState,
  reducers: {
    loadCoinStart: (state) => {
      state.loading = true;
    },
    loadCoinSuccess: (state, action) => {
      state.loading = false;
      state.tokens = action.payload; // Corrected the property name
    },
    loadCoinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadCoinStart, loadCoinFailure, loadCoinSuccess } =
  tokenSlice.actions;

export default tokenSlice.reducer;
