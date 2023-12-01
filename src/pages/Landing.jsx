import { useEffect, useState } from "react";
import CurrencyPairs from "../components/Landing/CurrencyPairs";
import { useDispatch, useSelector } from "react-redux";
import MiddleLogo from "../components/Landing/MiddleLogo";
import HeaderMain from "../components/MainPage/HeaderMain";
import { getGainers } from "../redux/action/gainers";

const Landing = () => {
  const dispatch = useDispatch();
  const { gainers, loading } = useSelector((state) => state.gainers);

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // Fetch data on mount
    console.log("triggered");

    dispatch(getGainers());

    // Refresh data every 5 minutes
    const intervalId = setInterval(() => {
      dispatch(getGainers());
    }, 5 * 60 * 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    if (!loading && gainers.length > 0) {
      setCurrentData([...gainers.slice(0,5)]);
    }
  }, [loading, gainers]);



  //getting more data
  const handlePagination = () => {
    if (!loading && gainers.length > 0) {
      const newDataLength = currentData.length + 5;
      const endIndex = newDataLength > gainers.length ? gainers.length : newDataLength;
      setCurrentData([...gainers.slice(0, endIndex)]);
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
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
