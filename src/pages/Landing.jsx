import CurrencyPairs from "../components/Landing/CurrencyPairs";

import MiddleLogo from "../components/Landing/MiddleLogo";
import HeaderMain from "../components/MainPage/HeaderMain";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 mb-12">
        <div>
          <HeaderMain > <img className="object-cover" src="/images/logoSmall.png" alt="logo" /></HeaderMain>
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
