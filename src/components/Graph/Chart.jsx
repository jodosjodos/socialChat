import React, { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import { useSelector } from 'react-redux';

const CandlestickChart = () => {
  const { markets } = useSelector((state) => state.markets);
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    if (markets.length > 0) {
      const chartOptions = {
        
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'white' },
        },
      };
      const chart = createChart(document.getElementById('container'), chartOptions);
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
        priceFormat: {
          type: 'price',
          precision: 8,
          minMove: 0.000001,
        },
      });

      let newData = [];

      markets.forEach((item) => {
        item.t.forEach((t, index) => {
          newData.push({
            open: item.o[index],
            high: item.h[index],
            low: item.l[index],
            close: item.c[index],
            time: item.t[index],
          });
        });
      });

      console.log("---data---");
      console.log(newData);

      setMarketData(newData);
      candlestickSeries.setData(newData);
      chart.timeScale().fitContent();
    }
  }, [markets]);

  console.log(markets);

  return <div id="container" className='w-full h-[400px]'></div>;
};

export default CandlestickChart;
