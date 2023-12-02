import axios from 'axios';

export const fetchDailyGainers = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-BLOBR-KEY': 'B3w1zizg0JuGHYuk4tm0H9U60l7GHawR'
    },
  };

  try {
    const response = await axios.get('https://open-api.dextools.io/free/v2/ranking/ether/gainers', options);
    const formattedData = response.data.data.map(item => ({
        mainTokenSymbol: item.mainToken.symbol,
        sideTokenSymbol: item.sideToken.symbol,
        price: item.price,
        variation24h: item.variation24h,
        exchangeFactory: item.exchange.factory,
        rank:item.rank
      }));
  
 
      return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Propagate the error for handling in the calling code if needed
  }
};



export const fetchDailyLosers = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-BLOBR-KEY': 'B3w1zizg0JuGHYuk4tm0H9U60l7GHawR'
    },
  };

  try {
    const response = await axios.get('https://open-api.dextools.io/free/v2/ranking/ether/losers', options);
    const formattedData = response.data.data.map(item => ({
        mainTokenSymbol: item.mainToken.symbol,
        sideTokenSymbol: item.sideToken.symbol,
        price: item.price,
        variation24h: item.variation24h,
        exchangeFactory: item.mainToken.address,
        rank:item.rank
      }));
  
 
      return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Propagate the error for handling in the calling code if needed
  }
};

export const fetchDailyHotPairs = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-BLOBR-KEY': 'B3w1zizg0JuGHYuk4tm0H9U60l7GHawR'
    },
  };

  try {
    const response = await axios.get('https://open-api.dextools.io/free/v2/ranking/ether/hotpools', options);
    const formattedData = response.data.data.map(item => ({
        mainTokenSymbol: item.mainToken.symbol,
        sideTokenSymbol: item.sideToken.symbol,
        // price: item.price,
        // variation24h: item.variation24h,
        exchangeFactory: item.exchange.factory,
        rank:item.rank
      }));
  
 
      return formattedData;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; // Propagate the error for handling in the calling code if needed
  }
};
