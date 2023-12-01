import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer/comment"
import gainersReducer from "./reducer/gainers"
import losersReducer from "./reducer/losers"

export const store = configureStore({
  reducer: {
    comments:commentReducer ,
    gainers:gainersReducer,
    losers:losersReducer,

  },
});
