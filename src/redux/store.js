import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducer/comment";
import gainersReducer from "./reducer/gainers";
import losersReducer from "./reducer/losers";
import hotPairsReducer from "./reducer/hotPairs";
import tokenReducer from "./reducer/token";
import marketReducer from "./reducer/market";
export const store = configureStore({
  reducer: {
    comments: commentReducer,
    gainers: gainersReducer,
    losers: losersReducer,
    hotPairs: hotPairsReducer,
    tokens: tokenReducer,
    symbol:marketReducer
  },
});
