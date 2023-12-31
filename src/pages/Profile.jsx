import { FaRegEdit } from "react-icons/fa";
import { userProfile1 } from "../data/user";
import { BsTwitterX, BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeaderMain from "../components/MainPage/HeaderMain";
import Switcher4 from "../components/Swicher4";

function Profile() {
  return (
    <div className="flex  w-full items-center  overflow-hidden  flex-col gap-4">
      <div>
  
        <div className="flex  flex-col gap-16 dark:bg-[#171717]">
          <div className="w-[100vw]">
            <HeaderMain>
              <img
                className="object-cover "
                src="/images/logoSmall.png"
                alt="logo"
              />
            </HeaderMain>
          </div>
          <div className="  self-center  ">
                      <div className="flex  lg:max-w-[2000px] lg:min-w-[1000px] flex-col gap-5">
            <h1 className="text-[#A6A6A6] font-bold md:text-4xl text-2xl self-center">
              Profile Settings
            </h1>
            <div className="flex md:flex-row flex-col items-center justify-between">
              <div className="flex flex-col gap-4  justify-center items-center">
                <img
                  src={userProfile1.image}
                  alt=" user profile"
                  className="lg:w-[345px] lg:h-[345px] md:w-[250px] md:h-[250px] w-[200px] h-[200px]"
                />
                <button>
                  <FaRegEdit color="#E1E1E1" size={36} />
                </button>
              </div>
              <div className="flex flex-col gap-5 text-[#898989]">
                <h1 className="md:text-3xl text-xl">Display Name</h1>
                <div className="flex flex-row gap-4 items-center">
                  <h1 className="md:text-5xl text-2xl font-bold">
                    {userProfile1.name}
                  </h1>
                  <button>
                    <FaRegEdit color="#E1E1E1" size={32} />
                  </button>
                </div>
                <p className="text-[#00FF57] font-semibold md:text-2xl text-xl">
                  {userProfile1.votes} upVotes | {userProfile1.comments}comments
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl">Social Connections</h1>
                  <div className="flex flex-row gap-8">
                    <Link
                      to="https://www.twitter.com"
                      className="flex flex-row gap-3 items-center md:text-xl text-md"
                    >
                      <BsTwitterX />
                      <p>{userProfile1.xUsername}</p>
                    </Link>
                    <Link
                      to="https://www.discord.com"
                      className="flex flex-row gap-3 items-center md:text-xl text-md"
                    >
                      <BsDiscord />
                      <p>{userProfile1.discordUsernam}</p>
                    </Link>
                    <button>
                      <FaRegEdit color="#E1E1E1" size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="self-center flex flex-col items-center justify-center">
              <h1 className="text-[#A6A6A6] font-bold md:text-4xl text-2xl">
                Badges
              </h1>
              <p className="text-[#898989]">
                (Choose 4 to be displayed on your mini profile)
              </p>
            </div>

            <div className="flex flex-row justify-between items-start px-0">
              {userProfile1.badges.map((badge) => (
                <div
                  key={badge.id}
                  className={` ${
                    badge.id == 4 ? "bg-[#ffe335]" : "bg-[#00FF57]"
                  } px-2 py-1 rounded-lg flex items-center justify-center`}
                >
                  <img
                    src={badge.image}
                    alt="badge img"
                    className="object-cover w-[30px] h-[30px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]"
                  />
                </div>
              ))}
            </div>
            <FaRegEdit
              color="#E1E1E1"
              className="self-center h-[40px] w-[40px] md:w-[60px] md:h-[60px]"
            />
          </div>
          <div className="flex justify-between items-center  w-full flex-col">
            <h1 className="text-[#A6A6A6] font-bold md:text-4xl  text-2xl self-center ">
              Settings
            </h1>
            <div className="flex flex-col w-full    gap-4">
              <div className="flex flex-row justify-between  w-full items-center">
                <p className="text-[#898989]    md:text-2xl text-lg  self-start ">
                  Show social connections?{" "}
                </p>
                <Switcher4 checked={true} />
              </div>
              <div className="flex flex-row  justify-between   w-full items-center">
                <p className="text-[#898989] md:text-2xl text-lg  self-start">
                  Show top comment on your mini-profile?
                </p>
                <Switcher4 checked={true} />
              </div>
              <div className="flex flex-row between justify-between  w-full  items-center">
                <p className="text-[#898989]   md:text-2xl text-lg self-start">
                  Show badges on mini-profile?{" "}
                </p>
                <Switcher4 checked={true} />
              </div>
              <div className="flex flex-row  justify-between  w-full items-center">
                <p className="text-[#898989]   md:text-2xl text-lg  self-start">
                  Show connected wallet address? (Disabled by default){" "}
                </p>
                <Switcher4 checked={false} />
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
