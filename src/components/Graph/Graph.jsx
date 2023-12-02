import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { CategoryScale } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";
import { timeChanges } from "../../data/timeChange";
import { usersWithVotes } from "../../data/user";
const CoinInfo = ({ coin }) => {  
  console.log("coin")
  console.log(coin)
  
  const height = "15m";
  const [isHovered, setIsHovered] = useState({ id: '', hovered: false })
  Chart.register(CategoryScale);
  Chart.register(zoomPlugin);
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const [flag, setflag] = useState(false);
  const currency = 'usd';

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin&&coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days,coin]);

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
            {/* {chartDays.map((day) => (
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
            ))} */}
            
            <div className="flex flex-row items-center md:gap-5 justify-center">
        <p className="text-[#898989] font-semibold md:text-2xl text-xl">Highlights</p>
        <p className="bg-[#E1E1E1] px-6 py-2 text-[#898989]  font-semibold  rounded-2xl dark:bg-[#202020]">
          {height}
        </p>
              </div>
              
      <div className="flex flex-row gap-1 relative w-full">
        <div className="overflow-x-scroll justify-between flex flex-row w-full">
        {timeChanges.map((timeChange) => (
        <div
          key={timeChange.id}
          className="flex flex-col  items-center justify-center "
          onMouseEnter={() => setIsHovered({ id: timeChange.id, hovered: true })}
          onMouseLeave={() => setIsHovered({ id: timeChange.id, hovered: false })}
        >
          {isHovered?.id === timeChange.id && isHovered.hovered && (
            <div className="flex flex-col gap-8 bg-white min-w-max border-4 rounded-2xl p-5 absolute bottom-28 z-[1000] dark:bg-[#202020] dark:border-[#333333]">
              {usersWithVotes.map((userWithVote) => (
                <div key={userWithVote.id} className="flex flex-row  w-fit items-center gap-[13px]">
                  <div>
                    <img src={userWithVote.profile} alt="user profile" className="w-[49px] h-[49px]" />
                  </div>
                  <div>
                    <div className="flex flex-row gap-2 items-center text-[15px]">
                      <p className="text-[#898989] font-bold ">{userWithVote.name} </p>
                      <p className="text-[#00FF57] font-semibold ">{userWithVote.votes} upVotes</p>
                    </div>
                    <p className="text-[#898989] semi-bold text-[15px]">{userWithVote.msg}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="hover:cursor-pointer ">
            <img
              src={timeChange.isRight ? "/images/timeGreen.png" : "/images/timeRed.png"}
                alt=""
                
            />
          </div>
          <p className="text-[#898989] font-bold lg:text-2xl md:text-xl text-[12px]">{timeChange.time}</p>
        </div>
      ))}
        </div>
  
    </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CoinInfo;
