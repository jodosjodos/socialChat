export const CoinList = () =>
  `https://api.coingecko.com/api/v3/coins/list?include_platform=true`;

export const SingleToken = (token_address) =>
  `https://api.dev.dex.guru/v1/chain/1/tokens/${token_address}/market`;

export const Pairs = (token) =>
  `https://api.dexscreener.com/latest/dex/tokens/${token}`;

export const HistoricalChart = (token) =>
  `https://api.geckoterminal.com/api/v2/networks/eth/pools/${token}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
