import { timeChanges } from "../../../data/timeChange";
import { usersWithVotes } from "../../../data/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CoinInfo from "../../Graph/Graph";
import axios from "axios"

import { CoinList, SingleCoin } from "../../config/api";
import HeaderMain from "../HeaderMain";
import {useSelector} from "react-redux"
import { store } from "../../../redux/store";
import { getCoin } from "../../../redux/action/coin";

const CurrencyPairBeingUsed = () => {
  const [coinInfo, setCoinInfo] = useState({})
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";
  const { token } = useParams();
  const {coins,loading,error}=useSelector((state)=>state.coins)
  const currency = 'usd'
  const symbol='$'
  



  useEffect(() => {
    if (coins && !coins.id) {
      store.dispatch(getCoin(currency, token))
    }
    else {
      async function fetchDetails() {
        const coinDetails = coins.id && await axios.get(SingleCoin(coins.id));
        console.log(coinDetails)
        
        setCoinInfo({ market_cap: coinDetails.data.market_data.market_cap.usd,supply:coinDetails.data.market_data.total_supply,holders:coinDetails.data.watchlist_portfolio_users,liquidity:coinDetails.data.liquidity_score});
        console.log(coinInfo);
        }
        
    
      if (!CoinInfo.market_cap) {
        fetchDetails()
      }
     
      
    }
    // ...
  }, [token, coins, isDark]);
  
    
 

    

   ;
 
  
  // console.log(coinInfo)
  const [isHovered, setIsHovered] = useState({ id: '', hovered: false })
  const height = "15m";

  
  
  return (
    <>
      {token&&loading!=true&&coins.id?    <div className="flex w-full flex-col gap-3 object-cover border-b-4 mr-28 pb-5 relative">
      
      <div className="flex w-full overflow-x-auto md:flex-row flex-col justify-stretch lg:gap-20 md:gap-15 gap-3 items-center">
        <div className="flex flex-col min-w-fit w-full  items-center ">
          <h1 className="text-[#454545] font-semibold self-start">
            TOKEN DETAILS
          </h1>
          <p className="bg-[#E1E1E1] dark:bg-[#454545] text-[#898989] w-full md:min-w-fit py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
              { coins&&coins.name}/{coins&&coins.platforms.ethereum}
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
            {coinInfo&&coinInfo.liquidity }
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">SUPPLY</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
          {coinInfo&&coinInfo.supply}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">HOLDERS</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer dark:bg-[#454545]">
          {coinInfo&&coinInfo.holders}
          </p>
        </div>
        </div>
 
      </div>
      <div className="w-full">
      <CoinInfo coin={coins} />
      </div>


      </div> : <div className={`w-full h-[100vh] flex flex-col justify-between items-center fixed top-0  z-[2000] left-0  dark:bg-black bg-white text-black dark:text-white`}>
          <HeaderMain><h1 className="text-[#E1E1E1] font-extrabold md:text-4xl text-2xl">Chatr</h1></HeaderMain>
          <div className="w-full flex items-center justify-center flex-col">
          <img src={isDark ? "/images/logoBigDark.png" : "/images/logoBigLight.png"} className="w-[30%] md:w-[30%] max-w-[400px]" />
          {loading!=true&& <p className="md:text-xl text-md">{!loading&&error=="Network Error"?"Something went wrong":"No token found with that address" }</p>}
         
          </div>
          <div></div>
   
      </div>}

</>
  );
};

export default CurrencyPairBeingUsed;
