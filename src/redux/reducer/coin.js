import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/user";

const initialState = {
  loading: false,

  coins: {}, // Corrected the property name
  isAuthenticated: false,
  error: null,
};

const coinSlice = createSlice({
  name: "coinReducer",
  initialState,
  reducers: {
    loadCoinStart: (state) => {
      state.loading = true;
    },
    loadCoinSuccess: (state, action) => {
      state.loading = false;
      state.coins = action.payload // Corrected the property name
    },
    loadCoinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadCoinStart,
  loadCoinFailure,
  loadCoinSuccess,
} = coinSlice.actions;

export default coinSlice.reducer;
