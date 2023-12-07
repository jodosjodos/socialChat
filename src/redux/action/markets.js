import axios from "axios";
import {
  loadMarketFailure,
  loadMarketStart,
  loadMarketSuccess,
} from "../reducer/market";
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

const options = {
  method: 'POST',
  url: 'https://scanner.tradingview.com/crypto/scan',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/2023.5.8',
    'api-key': '7L579IJz8VH1QZLYU03yLjwRTxoB8OPoSeAuUijU0pM',
    Origin: 'symbol-search.tradingview.com'
  },
  data: {
    filter: [{left: 'name,description', operation: 'match', right: 'WETH'}],
    options: {lang: 'en'},
    markets: ['crypto'],
    symbols: {query: {types: []}, tickers: []},
    columns: [
      'base_currency_logoid',
      'currency_logoid',
      'name',
      'close',
      'change',
      'change_abs',
      'high',
      'low',
      'volume',
      '24h_vol|5',
      '24h_vol_change|5',
      'Recommend.All',
      'exchange',
      'description',
      'type',
      'subtype',
      'update_mode',
      'pricescale',
      'minmov',
      'fractional',
      'minmove2'
    ],
    sort: {sortBy: 'name', sortOrder: 'asc'},
    price_conversion: {to_symbol: false},
    range: [0, 150]
  }
};

    axios.request(options)
      .then(async function(response) {
        let symbol = await response.data[0];
  let symbolName = symbol;
  console.log("symbol");
  console.log(symbol)
}).catch(function (error) {
  console.error(error);
});
   
    
 

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


