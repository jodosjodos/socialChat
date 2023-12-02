  import axios from "axios";
  import { useEffect, useState } from "react";
  import { HistoricalChart, SingleCoin } from "../config/api";
  import Chart from 'chart.js/auto';
  import { Line } from "react-chartjs-2";
  import { CategoryScale } from 'chart.js';
  import zoomPlugin from 'chartjs-plugin-zoom';

  import SelectButton from "./SelectButton";
  import { chartDays } from "../config/data";
  import { timeChanges } from "../../data/timeChange";
  import { usersWithVotes } from "../../data/user";
const CoinInfo = ({ coin }) => {  
   
    const [coinInfo,setCoinInfo]=useState({})

    console.log(coin)
    
    const savedTheme = localStorage.getItem("theme");
    let loggedInUser=null
    const isDarkTheme = savedTheme === "dark";
    const height = "15m";
    const [isHovered, setIsHovered] = useState({ id: '', hovered: false })
    Chart.register(CategoryScale);
    Chart.register(zoomPlugin);
    const [historicData, setHistoricData] = useState();
    const [days, setDays] = useState(1);

    const [flag, setflag] = useState(false);
  const currency = 'usd';
  let coinDetails;

    const fetchHistoricData = async () => {
       coinDetails = await axios.get(SingleCoin(coin && coin.id))
      setCoinInfo({market_cap:coinDetails.data.market_data.market_cap.usd,supply:coinDetails.total_supply })
      
      
      const { data } = await axios.get(HistoricalChart(coin&&coin.id, days, currency));
      setflag(true);
      setHistoricData(data.prices);
    };

    useEffect(() => {
      fetchHistoricData();
    }, [days, coin]);
  console.log(coinDetails)

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
              x: { min: 1, max: 10 }, // Adjust the limits as needed
              y: { min: 1, max: 10 }, // Adjust the limits as needed
            },
          },
          pan: {
            enabled: true,
            mode: 'xy',
          },
        },
      },
      
    };


    const Labels = () => historicData ? historicData.map((coin, index) => {


      let date = new Date(coin[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
        let label=days === 1 ?time : date.toLocaleDateString();

  return(<div
  key = {label}
  className="flex flex-col  items-center justify-center "
  onMouseEnter={() => setIsHovered({ id: index, hovered: true })}
  onMouseLeave={() => setIsHovered({ id: index, hovered: false })}
  >
  {isHovered?.id === index && isHovered.hovered && (
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

  <div className="hover:cursor-pointer md:w-[60px] md:h-[50px] flex-1 ">

  <img
    src={
      index !== 0
        ? historicData[index][1] >= historicData[index - 1][1]
          ? "/images/timeGreen.png"
          : "/images/timeRed.png"
        : "/images/timeGreen.png" // Assuming the default behavior for index 0 is red
    }
        alt=""
        className=""
  />


    

  </div>
  <p className="text-[#898989] font-bold lg:text-[10px] md:text-[8px] text-[6px]">{label}</p>
  </div>)





    }):<p>loading</p>
    return (
      <div>
        {!historicData || flag === false ? (
          <div className="w-full">
            <img src={isDarkTheme?"/images/tradeGraph.png":'/images/whiteGraph.png'} className=" blur-md" alt="" />
          </div>
        ) : (
          <>
              <Line className="cursor-pointer dark:text-white"
                data={{
                  labels: historicData.map((coin, index) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()}`
                        : `${date.getHours()}:${date.getMinutes()}`;
                    return days === 1 ? index % 6 == 0 ? time : '' : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price (Past ${days} Days)`,
                      borderColor: "#ff0000",
                    },
                  ],
                }}
                options={{
                  ...options,
                  scales: {
                    x: {
                      ticks: {
                        maxRotation: 0, // Disable rotation of labels
                        autoSkip: true, // Disable automatic skipping of labels
                  
                      },
                    },
                  },
                  onHover: (event, chart) => {
                    const { chartArea, scales } = chart;
                    if (!chartArea || !scales) return;
              
                    const { xScale, yScale } = scales;
                    const { offsetX, offsetY } = event;
              
                    const xValue = xScale.getValueForPixel(offsetX);
                    const yValue = yScale.getValueForPixel(offsetY);
              
                    // Find the corresponding data point based on xValue
                    const dataPoint = historicData.find((data) => data[0] === xValue);
              
                    if (dataPoint) {
                      const price = dataPoint[1];
                      const date = new Date(xValue);
                      const time = days === 1 ? date.toLocaleTimeString() : date.toLocaleDateString();
              
                      setCursorInfo({
                        x: xValue,
                        y: yValue,
                        price: price,
                        time: time,
                      });
                    }
                  },
                
                }
                }
                
              >
                
              </Line>
              <div
              
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
          <Labels/>
          </div>
    
      </div>
            </div>

          </>
        )}
      </div>
    );
  };




  export default CoinInfo;
