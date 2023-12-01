import PropTypes from "prop-types";
const CurrencyPairs = ({
  currentData,
  handleMore,
  loading,
  currentDataLosers,
  loadingLosers,
  handleMoreLosers,
}) => {
  console.log(currentDataLosers);<div className=" border-2 w-full justify-center xl:w-max rounded-xl flex flex-col gap-8 border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020]">
         
         
  <button className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center dark:bg-[#898989]">View More</button>
</div>
  console.log(loadingLosers);

  return (
    <div className="flex xl:flex-row flex-col gap-3 items-center justify-around">
      <div className="flex flex-col w-[90%] min-w-[340px] px-3  gap-2 justify-center items-center ">
        <h1 className="text-[#898989] text-2xl">Daily Gainers</h1>
        <div className=" border-2 rounded-xl flex flex-col gap-8 xl:w-fit w-full border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020] max-h-96 overflow-y-scroll">
          {!loading ? (
            currentData.map((data) => (
              <div
                className="flex text-sm justify-center  flex-row gap-5 lg:gap-2"
                key={data.rank}
              >
                <p className="text-[#898989]">
                  {data.mainTokenSymbol}/{data.sideTokenSymbol}{" "}
                </p>
                <p className="text-green-500"> ${data.price.toFixed(7)}</p>
                <p className="text-green-500 ">
                  {data.variation24h.toFixed(2)}%
                </p>
              </div>
            ))
          ) : (
            <div className="flex text-sm justify-center  flex-row gap-5 lg:gap-2 p-24">
              <p className="flex items-center justify-center text-[#898989] font-bold">
                loading...
              </p>
            </div>
          )}

          <button
            className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center dark:bg-[#898989]"
            onClick={handleMore}
            disabled={loading}
          >
            View More
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-[90%] min-w-[340px] px-3 justify-center items-center">
        <h1 className="text-[#898989] text-2xl">Daily Losers</h1>
        <div className=" border-2 rounded-xl flex flex-col gap-8 xl:w-fit w-full border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020] max-h-96 overflow-y-scroll">
          {!loadingLosers ? (
            currentDataLosers.map((dataLosers) => (
              <div
                className="flex text-sm justify-center  flex-row gap-5 lg:gap-2"
                key={dataLosers.rank}
              >
                <p className="text-[#898989]">
                  {dataLosers.mainTokenSymbol}/{dataLosers.sideTokenSymbol}{" "}
                </p>
                <p className="text-red-500">
                  {" "}
                  ${dataLosers.price.toFixed(7)}
                </p>
                <p className="text-red-500 ">
                  {dataLosers.variation24h.toFixed(2)}%
                </p>
              </div>
            ))
          ) : (
            <div className="flex text-sm justify-center  flex-row gap-5 lg:gap-2 p-24">
              <p className="flex items-center justify-center text-[#898989] font-bold">
                loading...
              </p>
            </div>
          )}

          <button
            className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center dark:bg-[#898989]"
            onClick={handleMoreLosers}
            disabled={loadingLosers}
          >
            View More
          </button>
        </div>
      </div>

      <div className="flex px-3  w-[90%] min-w-[340px] flex-col gap-2 justify-center items-center">
        <h1 className="text-[#898989] text-2xl">Trending Pairs </h1>
        <div className=" border-2 rounded-xl w-full xl:w-max flex flex-col gap-8 border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020]">
          <div className="flex text-sm flex-row  gap-2 justify-center ">
            <p className="text-[#898989]">PEPED/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2 justify-center ">
            <p className="text-[#898989]">FROGE/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2 justify-center ">
            <p className="text-[#898989]">safemoon/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2 justify-center ">
            <p className="text-[#898989]">THND/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

          <div className="flex text-sm flex-row  gap-2 justify-center ">
            <p className="text-[#898989]">KINGDOM/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

          <button className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center dark:bg-[#898989]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

CurrencyPairs.propTypes = {
  currentData: PropTypes.array.isRequired,
  handleMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentDataLosers: PropTypes.array.isRequired,
  handleMoreLosers: PropTypes.func.isRequired,
  loadingLosers: PropTypes.bool.isRequired,
};
export default CurrencyPairs;
