import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
const CoinInfo = ({ coin }) => {
  Chart.register(CategoryScale);
  Chart.register(zoomPlugin);
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const [flag, setflag] = useState(false);
  const currency = 'usd';

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart('01coin', days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const options = {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
          limits: {
            x: { min: 0, max: 10 }, // Adjust the limits as needed
            y: { min: 0, max: 10 }, // Adjust the limits as needed
          },
        },
        pan: {
          enabled: true,
          mode: 'xy',
        },
      },
    },
    
  };

  return (
    <div>
      {!historicData || flag === false ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Line className="cursor-pointer"
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicData.map((coin) => coin[1]),
                  label: `Price (Past ${days} Days)`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={options}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinInfo;
