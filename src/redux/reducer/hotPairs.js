import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingHotPairs: false,

  hotPairs: [], // Corrected the property name

  error: null,
};

const hotPairsSlice = createSlice({
  name: "hotPairsReducer",
  initialState,
  reducers: {
    loadingHotPairsStart: (state) => {
      state.loadingHotPairs = true;
    },
    loadingHotPairsSuccess: (state, action) => {
      state.loadingHotPairs = false;
      state.hotPairs = action.payload; // Corrected the property name
    },
    loadingHotPairsFailure: (state, action) => {
      state.loadingHotPairs = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadingHotPairsStart,
  loadingHotPairsFailure,
  loadingHotPairsSuccess,
} = hotPairsSlice.actions;

export default hotPairsSlice.reducer;
