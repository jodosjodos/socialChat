
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../components/Graph/Graph";

import { SingleCoin } from "../components/config/api";

const CoinPage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState();
  const currency = 'usd'
  const symbol='$'


  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log(data)

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  if (!coin) return <h1>loading</h1>;

  return (
    <div >
      <div >
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <h1 >
          {coin?.name}
        </h1>
        <p  >
          {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
        </p>
        <div>
          <span style={{ display: "flex" }}>
            <h5 variant="h5" >
              Rank:
            </h5>
            &nbsp; &nbsp;
            <h5
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {/* {numberWithCommas(coin?.market_cap_rank)} */}
            </h5>
          </span>

          <span style={{ display: "flex" }}>
            <h5 variant="h5" >
              Current Price:
            </h5>
            &nbsp; &nbsp;
            <h5
            
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {/* {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )} */}
            </h5>
          </span>
          <span style={{ display: "flex" }}>
            <h5 variant="h5" >
              Market Cap:
            </h5>
            &nbsp; &nbsp;
            <p
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {/* {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )} */}
              M
            </p>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default CoinPage;