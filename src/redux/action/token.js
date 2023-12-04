import axios from "axios";
import {
  loadCoinFailure,
  loadCoinStart,
  loadCoinSuccess,
} from "../reducer/token";
import { CoinList, SingleToken } from "../../components/config/api";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "api-key": "7L579IJz8VH1QZLYU03yLjwRTxoB8OPoSeAuUijU0pM",
  },
};
export const getToken = (currency, token) => async (dispatch) => {
  console.log(token);
  dispatch(loadCoinStart());
  try {
    const { data } = await axios.get(SingleToken(token), options);
    let single_token = data;
    console.log("single token");
    console.log(single_token);

    if (!single_token) {
      dispatch(loadCoinFailure("No token found with that address"));
    } else {
      console.log("success");
      dispatch(loadCoinSuccess(single_token));
    }
  } catch (err) {
    console.log("error");
    console.log(err.message);
    dispatch(loadCoinFailure(err.message));
  }
};


