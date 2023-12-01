import { useEffect, useState } from "react";
import CurrencyPairs from "../components/Landing/CurrencyPairs";
import { useDispatch, useSelector } from "react-redux";
import MiddleLogo from "../components/Landing/MiddleLogo";
import HeaderMain from "../components/MainPage/HeaderMain";
import { getGainers } from "../redux/action/gainers";
import { getLosers } from "../redux/action/losers";

const Landing = () => {
  const dispatch = useDispatch();
  const { gainers, loading } = useSelector((state) => state.gainers);
  const { losers, loadingLosers } = useSelector((state) => state.losers);

  const [currentData, setCurrentData] = useState([]);
  const [currentDataLosers, setCurrentDataLosers] = useState([]);


  useEffect(() => {
    // Fetch data on mount
    console.log("triggered");

    dispatch(getGainers());
    dispatch(getLosers())

    // Refresh data every 5 minutes
    const intervalId = setInterval(() => {
      dispatch(getGainers());
      dispatch(getLosers())
    }, 5 *  60*1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    if (!loading && gainers.length > 0) {
      setCurrentData([...gainers.slice(0,5)]);
    }
    if(!loadingLosers && losers.length > 0){
      setCurrentDataLosers([...losers.slice(0,5)])
    }
  }, [loading, gainers,losers,loadingLosers]);



  //getting more data for gainers
  const handlePagination = () => {
    if (!loading && gainers.length > 0) {
      const newDataLength = currentData.length + 5;
      const endIndex = newDataLength > gainers.length ? gainers.length : newDataLength;
      setCurrentData([...gainers.slice(0, endIndex)]);
    }
  };

  //getting more data for losers
  const handlePaginationLosers = () => {
    if (!loadingLosers && losers.length > 0) {
      const newDataLength = currentDataLosers.length + 5;
      const endIndex = newDataLength > losers.length ? losers.length : newDataLength;
      setCurrentDataLosers([...losers.slice(0, endIndex)]);
    }
  };
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-12 pb-12 dark:bg-[#171717]">
        <div>
          <HeaderMain>
            {" "}
            <img
              className="object-cover"
              src="/images/logoSmall.png"
              alt="logo"
            />
          </HeaderMain>
        </div>
        <div>
          <MiddleLogo />\
        </div>
        <div>
          <CurrencyPairs
            currentData={currentData}
            handleMore={handlePagination}
            loading={loading}
            currentDataLosers={currentDataLosers}
            handleMoreLosers={handlePaginationLosers}
            loadingLosers={loadingLosers}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
