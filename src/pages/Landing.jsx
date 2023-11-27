import CurrencyPairs from "../components/Landing/CurrencyPairs";
import Header from "../components/Landing/Header";
import MiddleLogo from "../components/Landing/MiddleLogo";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 mb-12">
        <div>
          <Header />
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
