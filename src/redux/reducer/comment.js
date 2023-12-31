import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../data/user";

const initialState = {
  loading: false,

  comments: [], // Corrected the property name
  isAuthenticated: false,
  error: null,
};

const commentSlice = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    loadCommentStart: (state) => {
      state.loading = true;
    },
    loadCommentSuccess: (state, action) => {
      state.loading = false;
      state.comments = [action.payload]; // Corrected the property name
    },
    
    loadCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createCommentStart: (state) => {
      state.loading = true;
    },
    createCommentSuccess: (state, action) => {
      state.loading = false;
      state.comments = [...state.comments,action.payload]; // Corrected the property name
    },
    
    createCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadCommentStart,
  loadCommentFailure,
  loadCommentSuccess,
  createCommentFailure,
  createCommentStart,
  createCommentSuccess
} = commentSlice.actions;

export default commentSlice.reducer;
