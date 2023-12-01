import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingLosers: false,

  losers: [], // Corrected the property name

  error: null,
};

const losersSlice = createSlice({
  name: "losersReducer",
  initialState,
  reducers: {
    loadingLosersStart: (state) => {
      state.loadingLosers = true;
    },
    loadingLosersSuccess: (state, action) => {
      state.loadingLosers = false;
      state.losers = action.payload; // Corrected the property name
    },
    loadingLosersFailure: (state, action) => {
      state.loadingLosers = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadingLosersStart,
  loadingLosersFailure,
  loadingLosersSuccess,
} = losersSlice.actions;

export default losersSlice.reducer;
