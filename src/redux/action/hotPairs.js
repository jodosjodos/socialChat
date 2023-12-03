import { fetchDailyHotPairs } from "../../data/pairs";
import {
  loadingHotPairsFailure,
  loadingHotPairsStart,
  loadingHotPairsSuccess,
} from "../reducer/hotPairs";

export const getHotPairs = () => async (dispatch) => {
  dispatch(loadingHotPairsStart());
  try {
    const data = await fetchDailyHotPairs();
    dispatch(loadingHotPairsSuccess(data));
  } catch (err) {
    dispatch(loadingHotPairsFailure(err.message));
  }
};
