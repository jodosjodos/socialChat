import { fetchDailyGainers } from "../../data/pairs";
import {
  loadGainersFailure,
  loadGainersStart,
  loadGainersSuccess,
} from "../reducer/gainers";

export const getGainers = () => async (dispatch) => {
  dispatch(loadGainersStart());
  try {
    const data = await fetchDailyGainers();
    dispatch(loadGainersSuccess(data));
  } catch (err) {
    dispatch(loadGainersFailure(err));
  }
};
