const CurrencyPairs = () => {
  return (
    <div className="flex flex-row gap-3 items-center justify-around">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[#898989] text-2xl">Daily Gainers</h1>
        <div className=" border-2 rounded-xl flex flex-col gap-8 border-[#E1E1E1] p-4">
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">PEPED/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">FROGE/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">safemoon/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">THND/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">KINGDOM/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

         
          <button className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center">View More</button>
        </div>
      </div>
   
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[#898989] text-2xl">Daily Losers</h1>
        <div className=" border-2 rounded-xl flex flex-col gap-8 border-[#E1E1E1] p-4">
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">PEPED/WETH </p>
            <p className="text-red-500"> $0.0007016</p>
            <p className="text-red-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">FROGE/WETH </p>
            <p className="text-red-500"> $0.0007016</p>
            <p className="text-red-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">safemoon/WETH </p>
            <p className="text-red-500"> $0.0007016</p>
            <p className="text-red-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">THND/WETH </p>
            <p className="text-red-500"> $0.0007016</p>
            <p className="text-red-500 ">8329.13%</p>
          </div>

          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">KINGDOM/WETH </p>
            <p className="text-red-500"> $0.0007016</p>
            <p className="text-red-500 ">8329.13%</p>
          </div>

         
          <button className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center">View More</button>
        </div>
      </div>
   
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[#898989] text-2xl">Trending Pairs </h1>
        <div className=" border-2 rounded-xl flex flex-col gap-8 border-[#E1E1E1] p-4">
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">PEPED/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">FROGE/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">safemoon/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>
          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">THND/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

          <div className="flex text-sm flex-row  gap-2">
            <p className="text-[#898989]">KINGDOM/WETH </p>
            <p className="text-green-500"> $0.0007016</p>
            <p className="text-green-500 ">8329.13%</p>
          </div>

         
          <button className="bg-[#E1E1E1] rounded-2xl py-3 px-6 font-bold self-center">View More</button>
        </div>
      </div>
   
    
    </div>
  );
};

export default CurrencyPairs;
