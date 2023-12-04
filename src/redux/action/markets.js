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
function removeWhitespace(inputString) {
  return inputString&&inputString.replace(/\s/g, '');
}
export const getMarkets = (token) => async (dispatch) => {
  console.log(token);
  dispatch(loadMarketStart());
  try {
   
    const { data } = token && await axios.get(HistoricalChart(token));
    console.log('----data----')
    console.log(data.data)
    const symbol = await axios.get(`https://symbol-search.tradingview.com/symbol_search/v3/?text=${data.data.attributes && removeWhitespace(data.data.attributes.name)}&hl=1&exchange=&lang=en&search_type=undefined&domain=production&sort_by_country=US`, { headers: { 'Origin': "https://www.tradingview.com", 'Referer':'https://www.tradingview.com/'}})
    let symbolName = symbol;
    console.log("symbol");
    console.log(symbol)
    
 

    if (!symbol) {
      dispatch(loadMarketFailure("No token found with that address"));
    } else {
      console.log("success");
    
      dispatch(loadMarketSuccess(symbolName));
    }
  } catch (err) {
    console.log("error");
    console.log(err.message);
    // dispatch(loadMarketFailure(err.message));
  }
};


