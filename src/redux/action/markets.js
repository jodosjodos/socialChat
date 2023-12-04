import axios from "axios";
import {
  loadMarketFailure,
  loadMarketStart,
  loadMarketSuccess,
} from "../reducer/market";
import { HistoricalChart } from "../../components/config/api";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "api-key": "7L579IJz8VH1QZLYU03yLjwRTxoB8OPoSeAuUijU0pM",
  },
};
const getHistoricalChartTimestamps = (toDate,days) => {
  
  const to = toDate;

  // Calculate one day in milliseconds
  const oneDayInMillis = 24 * 60 * 60 * 1000;

  // Calculate 'from' by subtracting one day from 'to'
  const from = to - oneDayInMillis;

  // Return an object with 'from' and 'to' timestamps
  return { from, to };
};
export const getMarkets = (currency, token) => async (dispatch) => {
  console.log(token);
  dispatch(loadMarketStart());
  try {
    let {from,to}=getHistoricalChartTimestamps(Date.now(),356)
    const { data } = await axios.get(HistoricalChart(token,from,to), options);
    let single_token = data;
    console.log("market data");
 

    if (!single_token) {
      dispatch(loadMarketFailure("No token found with that address"));
    } else {
      console.log("success");
    
      dispatch(loadMarketSuccess([single_token]));
    }
  } catch (err) {
    console.log("error");
    console.log(err.message);
    dispatch(loadMarketFailure(err.message));
  }
};


