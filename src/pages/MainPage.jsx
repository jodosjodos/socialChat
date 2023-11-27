import CurrencyPairBeingUsed from "../components/MainPage/CurrencyPairBe/CurrencyPairBeingUsed";
import USers from "../components/MainPage/CurrencyPairBe/USers";
import HeaderMain from "../components/MainPage/HeaderMain";

const MainPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div >
          <HeaderMain />
        </div>
        <div className="px-32 ">
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
