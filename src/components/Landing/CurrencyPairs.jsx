import PropTypes from "prop-types";
const CurrencyPairs = ({
  currentData,
  handleMore,
  loading,
  currentDataLosers,
  loadingLosers,
  handleMoreLosers,
  currentDataHotPairs,
  loadingHotPairs,
  handleMoreHotPairs,
  gainerError,
  loserError,
  hotPairsError,
}) => {
  console.log(hotPairsError);

  return (
    <div className="flex xl:flex-row flex-col gap-3 items-center justify-around">
      <div className="flex flex-col w-[90%] min-w-[340px] px-3  gap-2 justify-center items-center ">
        <h1 className="text-[#898989] text-2xl">Daily Gainers</h1>
        <div
          className={` border-2 rounded-xl flex flex-col gap-8  xl:w-fit w-full border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020] h-[25rem] overflow-y-auto  ${
            gainerError ? "font-bold text-2xl px-20 justify-between" : ""
          }`}
        >
          {gainerError ? (
            <div className={` flex justify-center items-center px-6`}>
              <p className="text-[#868686]">error: {gainerError}</p>
            </div>
          ) : (
            <>
              {!loading ? (
                currentData.map((data) => (
                  <div
                    className={`flex text-sm justify-around  flex-row gap-5  lg:gap-20`}
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
            </>
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
        <div
          className={` border-2 rounded-xl flex flex-col gap-8 xl:w-fit w-full border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020] h-[25rem] overflow-y-auto  ${
            loserError ? "font-bold text-2xl px-20 justify-between" : ""
          }`}
        >
          {loserError ? (
            <div className={` flex justify-center items-center px-6`}>
              <p className="text-[#868686]">error: {loserError}</p>
            </div>
          ) : (
            <>
              {!loadingLosers ? (
                currentDataLosers.map((dataLosers) => (
                  <div
                    className="flex text-sm justify-center  flex-row gap-5 lg:gap-20"
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
            </>
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
        <div
          className={`border-2 rounded-xl flex flex-col gap-8 xl:w-fit w-full border-[#E1E1E1] p-8 dark:border-none dark:bg-[#202020] h-[25rem] overflow-y-auto   ${
            hotPairsError ? "font-bold text-2xl px-20 justify-between" : ""
          }`}
        >
          {hotPairsError?
            <div className={` flex justify-center items-center px-6`}>
            <p className="text-[#868686]">error: {hotPairsError}</p>
          </div>
          :
          <>
           {!loadingHotPairs ? (
            currentDataHotPairs.map((dataHotPairs) => (
              <div
                className="flex text-sm justify-center  flex-row gap-5 lg:gap-20"
                key={dataHotPairs.rank}
              >
                <p className="text-[#898989]">
                  {dataHotPairs.mainTokenSymbol}/{dataHotPairs.sideTokenSymbol}{" "}
                </p>
                <p className="text-green-500">
                  {" "}
                  ${(Math.random() * 1).toFixed(7)}
                </p>
                <p className="text-green-500 ">
                  {(Math.random() * 100).toFixed(2)}%
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
          </>
          }
         

          <button
            className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center dark:bg-[#898989]"
            onClick={handleMoreHotPairs}
            disabled={loadingHotPairs}
          >
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
  currentDataHotPairs: PropTypes.array.isRequired,
  handleMoreHotPairs: PropTypes.func.isRequired,
  loadingHotPairs: PropTypes.bool.isRequired,
  gainerError: PropTypes.string,
  loserError: PropTypes.string,
  hotPairsError: PropTypes.string,
};
export default CurrencyPairs;
