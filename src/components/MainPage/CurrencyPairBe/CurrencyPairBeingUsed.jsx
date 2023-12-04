import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../../Graph/Graph";
import axios from "axios";

import { CoinList, Pairs, SingleToken } from "../../config/api";
import HeaderMain from "../HeaderMain";
import { useSelector } from "react-redux";
import CandlestickChart from "../../Graph/Chart";

function convertDateToUnixTimestamp(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}

const CurrencyPairBeingUsed = () => {
  const [tokenInfo, setTokenInfo] = useState({});
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  const { token } = useParams();
  const { tokens, loading, error } = useSelector((state) => state.tokens);
  const {markets}=useSelector((state)=>state.markets)
  const currency = "usd";
  const symbol = "$";

  useEffect(() => {
    async function fetchDetails() {
      const pairs =
  tokens.address &&
  (await axios.get(Pairs(tokens && tokens.address)));
console.log("pairs");


setTokenInfo({
  market_cap: 0,
  supply: tokens&&tokens.token_supply,
  holders: 0,
  liquidity: pairs.data.pairs!=null ? pairs.data.pairs[0].liquidity.usd:0,
});

     
    }
    if (!tokenInfo.liquidity) {
      console.log("Hello ");
      fetchDetails();
    }
  }, [tokens,markets, isDark]);

  // console.log(tokenInfo)
  const [isHovered, setIsHovered] = useState({ id: "", hovered: false });
  const height = "15m";
  console.log(error)

  return (
    <>
      {loading != true && tokens && tokens.address ? (
        <div className="flex w-full flex-col gap-3 object-cover border-b-4 mr-28 pb-5 relative">
          <div className="flex w-full overflow-x-auto md:flex-row flex-col justify-stretch lg:gap-20 md:gap-15 gap-3 items-center">
            <div className="flex flex-col md:min-w-fit sm:w-full w-full  items-center ">
              <h1 className="text-[#454545] font-semibold self-start">
                TOKEN DETAILS
              </h1>
              <p className="bg-[#E1E1E1] dark:bg-[#454545]  text-[#898989] break-words w-full md:min-w-fit py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
                {tokens && tokens.name}/{tokens && tokens.address}
              </p>
            </div>
            <div className="flex md:flex-row md:gap-3 flex-wrap md:flex-nowrap  w-full md:text-[15px] text-[13px]  justify-between flex-1 px-2">
              <div className="flex flex-col items-center">
                <h1 className="text-[#454545] font-semibold md:text-[15px]  ">
                  MCAP
                </h1>
                {tokenInfo && tokenInfo.market_cap != null && (
                  <p className="bg-[#E1E1E1] min-w-max text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
                    {tokenInfo && tokenInfo.market_cap >= 1000000000000
                      ? `${(tokenInfo.market_cap / 1000000000000).toFixed(2)} T`
                      : tokenInfo.market_cap >= 1000000000
                      ? `${(tokenInfo.market_cap / 1000000000).toFixed(2)} B`
                      : tokenInfo.market_cap >= 1000000
                      ? `${(tokenInfo.market_cap / 1000000).toFixed(2)} M`
                      : tokenInfo.market_cap >= 1000
                      ? `${(tokenInfo.market_cap / 1000).toFixed(2)} K`
                      : tokenInfo.market_cap.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#454545] font-semibold">LIQUIDITY</h1>
                {tokenInfo && tokenInfo.liquidity != null && (
                  <p className="bg-[#E1E1E1] min-w-max text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
                    {tokenInfo && tokenInfo.liquidity >= 1000000000000
                      ? `${(tokenInfo.liquidity / 1000000000000).toFixed(2)} T`
                      : tokenInfo.liquidity >= 1000000000
                      ? `${(tokenInfo.liquidity / 1000000000).toFixed(2)} B`
                      : tokenInfo.liquidity >= 1000000
                      ? `${(tokenInfo.liquidity / 1000000).toFixed(2)} M`
                      : tokenInfo.liquidity >= 1000
                      ? `${(tokenInfo.liquidity / 1000).toFixed(2)} K`
                      : tokenInfo.liquidity.toFixed(2)}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#454545] font-semibold">SUPPLY</h1>
                {tokenInfo && tokenInfo.supply != null && (
                  <p className="bg-[#E1E1E1] min-w-max text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
                    {tokenInfo && tokenInfo.supply >= 1000000000000
                      ? `${(tokenInfo.supply / 1000000000000).toFixed(2)} T`
                      : tokenInfo.supply >= 1000000000
                      ? `${(tokenInfo.supply / 1000000000).toFixed(2)} B`
                      : tokenInfo.supply >= 1000000
                      ? `${(tokenInfo.supply / 1000000).toFixed(2)} M`
                      : tokenInfo.supply >= 1000
                      ? `${(tokenInfo.supply / 1000).toFixed(2)} K`
                      : tokenInfo.supply.toFixed(2)}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#454545] font-semibold">HOLDERS</h1>
                {tokenInfo && tokenInfo.holders != null && (
                  <p className="bg-[#E1E1E1] min-w-max text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
                    {tokenInfo && tokenInfo.holders >= 1000000000000
                      ? `${(tokenInfo.holders / 1000000000000).toFixed(2)} T`
                      : tokenInfo.holders >= 1000000000
                      ? `${(tokenInfo.holders / 1000000000).toFixed(2)} B`
                      : tokenInfo.holders >= 1000000
                      ? `${(tokenInfo.holders / 1000000).toFixed(2)} M`
                      : tokenInfo.holders >= 1000
                      ? `${(tokenInfo.holders / 1000).toFixed(2)} K`
                      : tokenInfo.holders.toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <CandlestickChart markets={markets} />
          </div>
        </div>
      ) : (
        <div
          className={`w-full h-[100vh] flex flex-col justify-between items-center fixed top-0  z-[2000] left-0  dark:bg-black bg-white text-black dark:text-white`}
        >
          <HeaderMain>
            <h1 className="text-[#E1E1E1] font-extrabold md:text-4xl text-2xl">
              Chatr
            </h1>
          </HeaderMain>
          <div className="w-full flex items-center justify-center flex-col">
            <img
              src={
                isDark ? "/images/logoBigDark.png" : "/images/logoBigLight.png"
              }
              className="w-[30%] md:w-[30%] max-w-[400px]"
            />
            {loading && <p>Loading</p>}
            {loading != true && (
              <p className="md:text-xl text-md">
                { error == "Network Error"
                  ? "Something went wrong"
                  : "No token found with that address"}
              </p>
            )}
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default CurrencyPairBeingUsed;
