import CurrencyPairBeingUsed from "../components/MainPage/CurrencyPairBe/CurrencyPairBeingUsed";
import USers from "../components/MainPage/CurrencyPairBe/USers";
import HeaderMain from "../components/MainPage/HeaderMain";

const MainPage = () => {
  return (
    <div>
      <div className="flex w-full  flex-col gap-5 py-5">
        <div >
          <HeaderMain > <h1 className="text-[#E1E1E1] font-extrabold md:text-4xl text-2xl">Chatr</h1></HeaderMain>
        </div>
        <div className="lg:px-32 w-full overflow-x-hidden md:px-25 px-3 ">
          <CurrencyPairBeingUsed />
        </div>
        <div>
          <USers />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
