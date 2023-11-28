import { useState } from "react";
import { timeChanges } from "../../../data/timeChange";
import { usersWithVotes } from "../../../data/user";

const CurrencyPairBeingUsed = () => {
  const [isHovered,setIsHovered]=useState({id:'',hovered:false})

  const height = "15m";
  console.log('is')
  //  use margin to adjust  border to fit similar to image and user
  return (
    <div className="flex flex-col gap-3 object-cover border-b-4 mr-28 pb-5 relative">
      <div className="flex flex-row justify-stretch gap-48 items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[#454545] font-semibold self-start">
            TOKEN DETAILS
          </h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            GROK/USD CA: 0x839...02d5 PAIR: 0x69...82a2{" "}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#454545] font-semibold">MCAP</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            48.13M
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#454545] font-semibold">LIQUIDITY</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            1.5M
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">SUPPLY</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            6.9B
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#454545] font-semibold">HOLDERS</h1>
          <p className="bg-[#E1E1E1] text-[#898989] py-2 px-5 rounded-2xl  font-bold hover:cursor-pointer">
            12.8K
          </p>
        </div>
      </div>
      <div>
        <img
          src="/images/tradeGraph.png"
          alt="trade graph"
          className="bg-cover "
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <p className="text-[#898989] font-semibold text-3xl">Highlights</p>
        <p className="bg-[#E1E1E1] px-6 py-2 text-[#898989]  font-semibold  rounded-2xl text-2xl">
          {height}
        </p>
      </div>
      <div className="flex  w-full flex-row gap-1 ">
      {timeChanges.map((timeChange) => (
        <div
          key={timeChange.id}
          className="flex flex-col items-center justify-center relative"
          onMouseEnter={() => setIsHovered({ id: timeChange.id, hovered: true })}
          onMouseLeave={() => setIsHovered({ id: timeChange.id, hovered: false })}
        >
          {isHovered?.id === timeChange.id && isHovered.hovered && (
            <div className="flex flex-col gap-8 bg-white md:w-[400px] border-4 rounded-2xl p-5 absolute bottom-44">
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

          <div className="hover:cursor-pointer">
            <img
              src={timeChange.isRight ? "/images/timeGreen.png" : "/images/timeRed.png"}
              alt=""
            />
          </div>
          <p className="text-[#898989] font-bold text-2xl">{timeChange.time}</p>
        </div>
      ))}
    </div>

    </div>
  );
};

export default CurrencyPairBeingUsed;
