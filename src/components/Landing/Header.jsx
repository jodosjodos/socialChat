import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
const Header = () => {

    const loggedUserId ="X09557262932807yqdsaljdhalhak"
  return (
      <div className="flex flex-row items-center justify-between p-3">
        <div className="">
          <img className="object-cover" src="/images/logoSmall.png" alt="logo" />
        </div>
        <div className="flex flex-row items-center gap-3">
          <input type="text" name="search" className="bg-[#E1E1E1] rounded-lg outline-none px-3 w-[420px] h-[28px]" />
          <button>
          <IoMdSearch  color="#E1E1E1" size={34} />

          </button>
        </div>
        <div className="flex flex-row gap-3 items-center">
            <div>
                <img src="/images/greenDot.png"/>
            </div>

            <p className="text-[#898989] bg-[#E1E1E1] p-1 rounded-lg">{loggedUserId}</p>
            <button>
            <FaUser color="#E1E1E1" size={28}/>

            </button>

        </div>
      </div>
  );
};

export default Header;
