import { IoMdSearch } from "react-icons/io";

import { CgMenuRightAlt } from "react-icons/cg";

import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModeToggle from "../ModeToggle";
const HeaderMain = ({children}) => {
  const savedTheme = localStorage.getItem("theme");
  const isDarkTheme = savedTheme === "dark";
  const loggedUserId = "0x95...0cc";
  return (
    <div className="flex top-0 left-0 right-0 flex-row items-center justify-between md:p-5 p-2 w-full">
      <Link
 to="/" className="">
       {children}
      </Link>
      <div className="md:flex hidden flex-row items-center gap-3">
        <input
          type="text"
          name="search"
          className="bg-[#E1E1E1] rounded-lg outline-none px-3 w-[420px] h-[28px] dark:bg-[#898989]"
        />
        <button>
        <IoMdSearch color={`${isDarkTheme ? "#898989" : "#E1E1E1"}`} size={38} />
      
        </button>
      </div>
      <div className="md:flex  hidden flex-row gap-3 items-center">
      <ModeToggle />
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
      <div className="md:hidden block">
      <CgMenuRightAlt size={34} />

      </div>

    </div>
  );
};
HeaderMain.propTypes = {
  children: PropTypes.node, // Example: children should be a React node
};
export default HeaderMain;
