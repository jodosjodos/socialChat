import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer/comment"
import gainersReducer from "./reducer/gainers"

export const store = configureStore({
  reducer: {
    comments:commentReducer ,
    gainers:gainersReducer

  },
});
