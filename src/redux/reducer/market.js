import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/user";

const initialState = {
  loading: false,

  symbol: [], // Corrected the property name
  isAuthenticated: false,
  error: null,
};

const marketSlice = createSlice({
  name: "marketReducer",
  initialState,
  reducers: {
    loadMarketStart: (state) => {
      state.loading = true;
    },
    loadMarketSuccess: (state, action) => {
      state.loading = false;
      state.symbol = action.payload; // Corrected the property name
    },
    loadMarketFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadMarketStart, loadMarketFailure, loadMarketSuccess } =
  marketSlice.actions;

export default marketSlice.reducer;
