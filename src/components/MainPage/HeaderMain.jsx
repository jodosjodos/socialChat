import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  const loggedUserId = "0x95...0cc";
  return (
    <div className="flex flex-row items-center justify-between p-5">
      <div className="">
        <h1 className="text-[#E1E1E1] font-extrabold text-4xl">Chatr</h1>
      </div>
      <div className="flex flex-row items-center gap-3">
        <input
          type="text"
          name="search"
          className="bg-[#E1E1E1] rounded-lg outline-none px-3 w-[420px] h-[28px]"
        />
        <button>
          <IoMdSearch color="#E1E1E1" size={34} />
        </button>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div>
          <img src="/images/greenDot.png" />
        </div>

        <p className="text-[#898989] bg-[#E1E1E1] px-2 rounded-lg">
          {loggedUserId}
        </p>

        <Link  to="/profile">
          <FaUser color="#E1E1E1" size={28} />
        </Link >
      </div>
    </div>
  );
};

export default HeaderMain;
