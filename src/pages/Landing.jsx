import CurrencyPairs from "../components/Landing/CurrencyPairs";

import MiddleLogo from "../components/Landing/MiddleLogo";
import HeaderMain from "../components/MainPage/HeaderMain";

const Landing = ({sidebarOpened ,setSidebarOpened}) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-12 pb-12 dark:bg-[#171717]">
        <div>
          <HeaderMain  > <img className="object-cover" src="/images/logoSmall.png" alt="logo" /></HeaderMain>
        </div>
        <div>
          <MiddleLogo />
        </div>
        <div>
            <CurrencyPairs/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
