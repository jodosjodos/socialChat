import Header from "../components/Header";
import {  FaRegEdit } from "react-icons/fa";
import { userProfile1 } from "../data/user";
import { BsTwitterX, BsDiscord } from "react-icons/bs";
import { Switch } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <h1 className="text-[#A6A6A6] font-bold text-4xl self-center">
          Profile Settings
        </h1>
        <div className="flex flex-row items-center justify-evenly">
          <div className="flex flex-col gap-4  justify-center items-center">
            <img src={userProfile1.image} alt=" user profile" />
            <button>
              <FaRegEdit color="#E1E1E1" size={36} />
            </button>
          </div>
          <div className="flex flex-col gap-5 text-[#898989]">
            <h1 className="text-3xl">Display Name</h1>
            <div className="flex flex-row gap-4 items-center">
              <h1 className="text-5xl font-bold">{userProfile1.name}</h1>
              <button>
                <FaRegEdit color="#E1E1E1" size={32} />
              </button>
            </div>
            <p className="text-[#00FF57] font-semibold text-2xl">
              {userProfile1.votes} upVotes | {userProfile1.comments}comments
            </p>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl">Social Connections</h1>
              <div className="flex flex-row gap-8">
                <Link
                  to="https://www.twitter.com"
                  className="flex flex-row gap-3 items-center text-xl"
                >
                  <BsTwitterX />
                  <p>{userProfile1.xUsername}</p>
                </Link>
                <Link
                  to="https://www.discord.com"
                  className="flex flex-row gap-3 items-center text-xl"
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
          <h1 className="text-[#A6A6A6] font-bold text-4xl">Badges</h1>
          <p className="text-[#898989]">
            (Choose 4 to be displayed on your mini profile)
          </p>
        </div>

        <div className="flex flex-row justify-evenly">
          {userProfile1.badges.map((badge) => (
            <div
              key={badge.id}
              className={` ${
                badge.id == 4 ? "bg-[#ffe335]" : "bg-[#00FF57]"
              } px-3 py-2 rounded-lg flex items-center justify-center`}
            >
              <img src={badge.image} alt="badge img" className="object-cover" />
            </div>
          ))}
        </div>
        <FaRegEdit color="#E1E1E1" size={45}  className="self-center"/>
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#A6A6A6] font-bold text-4xl self-center ">
          Settings
        </h1>
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-row justify-evenly text-2xl">
            <p>Show social connections? </p>
          <Switch color="green" defaultChecked/>
          </div>
          <div>
            <p>Show top comment on your mini-profile?</p>
            <Switch color="green" defaultChecked />
          </div>
          <div>
            <p>Show badges on mini-profile? </p>
            <Switch color="green" defaultChecked />
          </div>
          <div>
            <p>Show connected wallet address? (Disabled by default) </p>
            <Switch color="green" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
