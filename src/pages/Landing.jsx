import { useEffect, useState } from "react";
import CurrencyPairs from "../components/Landing/CurrencyPairs";
import { useDispatch, useSelector } from "react-redux";
import MiddleLogo from "../components/Landing/MiddleLogo";
import HeaderMain from "../components/MainPage/HeaderMain";
import { getGainers } from "../redux/action/gainers";
import { getLosers } from "../redux/action/losers";
import { getHotPairs } from "../redux/action/hotPairs";

const Landing = () => {
  const dispatch = useDispatch();
  const { gainers, loading,error:gainerError } = useSelector((state) => state.gainers);
  const { losers, loadingLosers, error:loserError } = useSelector((state) => state.losers);
  const { hotPairs, loadingHotPairs , error :hotPairsError } = useSelector((state) => state.hotPairs);

  // testing 

  const [currentData, setCurrentData] = useState([]);
  const [currentDataLosers, setCurrentDataLosers] = useState([]);
  const [currentDataHotPairs, setCurrentDataHotPairs] = useState([]);

  useEffect(() => {
    dispatch(getGainers());
    dispatch(getLosers());
    dispatch(getHotPairs());

    // Refresh data every 5 minutes
    const intervalId = setInterval(() => {
      dispatch(getGainers());
      dispatch(getLosers());
      // dispatch(getHotPairs())
    }, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    // initializing gainers
    if (!loading && gainers.length > 0) {
      setCurrentData([...gainers.slice(0, 5)]);
    }

    // initializing losers
    if (!loadingLosers && losers.length > 0) {
      setCurrentDataLosers([...losers.slice(0, 5)]);
    }

    // initializing hostPairs
    if (!loadingHotPairs && hotPairs.length > 0) {
      setCurrentDataHotPairs([...hotPairs.slice(0, 5)]);
    }
  }, [loading, gainers, losers, loadingLosers, loadingHotPairs, hotPairs]);

  //getting more data for gainers
  const handlePagination = () => {
    if (!loading && gainers.length > 0) {
      const newDataLength = currentData.length + 5;
      const endIndex =
        newDataLength > gainers.length ? gainers.length : newDataLength;
      setCurrentData([...gainers.slice(0, endIndex)]);
    }
  };

  //getting more data for losers
  const handlePaginationLosers = () => {
    if (!loadingLosers && losers.length > 0) {
      const newDataLength = currentDataLosers.length + 5;
      const endIndex =
        newDataLength > losers.length ? losers.length : newDataLength;
      setCurrentDataLosers([...losers.slice(0, endIndex)]);
    }
  };

  // getting more data for hotPairs
  const handlePaginationHotPairs = () => {
    if (!loadingHotPairs && hotPairs.length > 0) {
      const newDataLength = currentDataHotPairs.length + 5;
      const endIndex =
        newDataLength > hotPairs.length ? hotPairs.length : newDataLength;
      setCurrentDataHotPairs([...hotPairs.slice(0, endIndex)]);
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
            currentDataHotPairs={currentDataHotPairs}
            loadingHotPairs={loadingHotPairs}
            handleMoreHotPairs={handlePaginationHotPairs}
            gainerError={gainerError}
            loserError={loserError}
            hotPairsError={hotPairsError}

          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
