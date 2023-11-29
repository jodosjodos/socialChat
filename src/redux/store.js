import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer/comment"
export const store = configureStore({
  reducer: {
    comments:commentReducer ,

  },
});
