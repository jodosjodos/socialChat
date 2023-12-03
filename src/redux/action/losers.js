import { fetchDailyLosers } from "../../data/pairs";
import { loadingLosersSuccess, loadingLosersFailure, loadingLosersStart } from "../reducer/losers";

export const getLosers = () => async (dispatch) => {
  dispatch(loadingLosersStart());
  try {
    const data = await fetchDailyLosers();
    dispatch(loadingLosersSuccess(data));
  } catch (err) {
    dispatch(loadingLosersFailure(err.message));
  }
};
