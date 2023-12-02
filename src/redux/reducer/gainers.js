import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  gainers: [], // Corrected the property name

  error: null,
};

const gainersSlice = createSlice({
  name: "gainersReducer",
  initialState,
  reducers: {
    loadGainersStart: (state) => {
      state.loading = true;
    },
    loadGainersSuccess: (state, action) => {
      state.loading = false;
      state.gainers = action.payload; // Corrected the property name
    },
    loadGainersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadGainersStart,
  loadGainersFailure,
  loadGainersSuccess,
} = gainersSlice.actions;

export default gainersSlice.reducer;
