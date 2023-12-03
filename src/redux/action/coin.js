
import axios from "axios";
import {
  loadCoinFailure,
  loadCoinStart,
  loadCoinSuccess,
} from "../reducer/coin";
import { CoinList } from "../../components/config/api";

export const getCoin = (currency, token) => async (dispatch) => {
  console.log(token)
  dispatch(loadCoinStart());
  try {
   const { data } = await axios.get(CoinList(currency));
    let single_coin = data.filter((data) => data.platforms.ethereum &&data.platforms.ethereum == token)
    console.log('single coin')
    console.log(single_coin[0])
    
  
    if (!single_coin) {

      dispatch(loadCoinFailure('No token found with that address'))
    }
    else {
      console.log('success')
      dispatch(loadCoinSuccess(single_coin[0]));
    }
    
   
  } catch (err) {
    console.log('error')
    console.log(err.message)
    dispatch(loadCoinFailure(err.message));
  }
};
