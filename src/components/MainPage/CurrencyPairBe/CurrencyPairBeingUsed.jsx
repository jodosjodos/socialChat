import { timeChanges } from "../../../data/timeChange";
import { usersWithVotes } from "../../../data/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../../Graph/Graph";
import axios from "axios"

import { CoinList, SingleCoin } from "../../config/api";
import HeaderMain from "../HeaderMain";

const CurrencyPairBeingUsed = () => {
  const [coinInfo, setCoinInfo] = useState({})
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  const { token } = useParams();
  const [coin, setCoin] = useState();
  const currency = 'usd'
  const symbol='$'

  const fetchCoin = async () => {    const { data } = await axios.get(CoinList(currency));
    let single_coin = data.filter((data) => data.platforms.ethereum &&data.platforms.ethereum == token)
    console.log('single coin')
    console.log(single_coin)
    setCoin(single_coin&&single_coin[0]);
  };


  useEffect(() => {
 
    fetchCoin().then(async () => {
      const coinDetails = await axios.get(SingleCoin(coin && coin.id))
      console.log(coinDetails)
      setCoinInfo({market_cap:coinDetails.data.market_data.market_cap.usd,supply:coinDetails.total_supply })
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token,coin,isDark]);
  const [isHovered, setIsHovered] = useState({ id: '', hovered: false })
  const height = "15m";

  
  
  return (
    <>
      {token?    <div className="flex w-full flex-col gap-3 object-cover border-b-4 mr-28 pb-5 relative">
      
      <div className="flex w-full overflow-x-auto md:flex-row flex-col justify-stretch lg:gap-20 md:gap-15 gap-3 items-center">
        <div className="flex flex-col min-w-fit w-full  items-center ">
          <h1 className="text-[#454545] font-semibold self-start">
            TOKEN DETAILS
          </h1>
          <p className="bg-[#E1E1E1] dark:bg-[#454545] text-[#898989] w-full md:min-w-fit py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            GROK/USD CA: 0x839...02d5 PAIR: 0x69...82a2{" "}
          </p>
        </div>
        <div className="flex md:flex-row md:gap-3 w-full md:text-[15px] text-[13px]  justify-between flex-1 px-2">
        <div className="flex flex-col items-center">
          <h1 className="text-[#454545] font-semibold md:text-[15px]  ">MCAP</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5  rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
              {coinInfo&&coinInfo.market_cap}
              12.3M
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#454545] font-semibold">LIQUIDITY</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
            1.5M
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">SUPPLY</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
            6.9B
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">HOLDERS</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
            12.8K
          </p>
        </div>
        </div>
 
      </div>
      <div className="w-full">
      <CoinInfo coin={coin} />
      </div>


      </div> : <div className={`w-full h-[100vh] flex flex-col items-center fixed top-0  z-[2000] left-0  dark:bg-black bg-white text-black dark:text-white`}>
          <HeaderMain><h1 className="text-[#E1E1E1] font-extrabold md:text-4xl text-2xl">Chatr</h1></HeaderMain>
          <img src={isDark ? "/images/logoBigDark.png" : "/images/logoBigLight.png"} className="w-[80%] md:w-[30%] max-w-[400px]"  />
           <p className="md:text-xl text-md">No token found with that address</p>
      </div>}

</>
  );
};

export default CurrencyPairBeingUsed;
