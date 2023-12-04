export const CoinList = () =>
  `https://api.coingecko.com/api/v3/coins/list?include_platform=true`;

export const SingleToken = (token_address) =>
  `https://api.dev.dex.guru/v1/chain/1/tokens/${token_address}/market`;

export const Pairs = (token) =>
  `https://api.dexscreener.com/latest/dex/tokens/${token}`;

export const HistoricalChart = (token, from, to, resolution = "5") =>
  `https://api.dev.dex.guru/v1/tradingview/history?symbol=${token}-eth_USD&resolution=${resolution}&from=${from}&to=${to}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
