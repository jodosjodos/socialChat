import { IoMdClose, IoMdLogOut, IoMdSearch } from "react-icons/io";

import { CgMenuRightAlt } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";


import ModeToggle from "../ModeToggle";
const HeaderMain = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
    const savedTheme = localStorage.getItem("theme");
    const isDarkTheme = savedTheme === "dark";
    const loggedUserId = "0x95...0cc";
    const [token, setToken] = useState()

  const navigate = useNavigate();
 
  
  
  const handleSubmit = () => {
    navigate(`/main/${token}`)
    
  }

  return (
    <div className="flex top-0 left-0 right-0 flex-row items-center justify-between md:p-5 p-2 w-full">
      <Link
 to="/" className="">
       {children}
      </Link>
      <form className="lg:flex hidden flex-row items-center gap-3"  onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="bg-[#E1E1E1] rounded-lg outline-none px-3 w-[420px] h-[28px] dark:bg-[#898989]"
          onChange={(e)=>setToken(e.target.value)}
        />
        <button>
        <IoMdSearch color={`${isDarkTheme ? "#898989" : "#E1E1E1"}`} size={38} />
      
        </button>
      </form>
      <div className="lg:flex  hidden flex-row gap-3 items-center">
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
      <div className="lg:hidden block">
      <CgMenuRightAlt size={34} className="dark:text-white" onClick={()=>setSidebarOpened(true)} />

      </div>

      {sidebarOpened && <div className="fixed z-[1200] shadow-md flex flex-col justify-between max-w-[500px] lg:hidden blok top-0 right-0 h-screen w-[80%] min-w-[200px]  bg-white dark:bg-[#171717] py-3 px-3">
          <div className="w-full">
          <div className="w-full flex justify-between pt-2 pb-8">
          <ModeToggle />
            <IoMdClose size={20}  className="dark:text-white" onClick={()=>setSidebarOpened(false)}/>
          </div>
  
          <div className="relative w-full">

          <input className=" h-[40px] w-full rounded-md da dark:bg-black dark:text-white bg-[#E1E1E1] px-3" placeholder="Search here ...">
            
            </input>
            <div className="absolute top-2.5 right-2">
            <IoMdSearch size={20} color="gray"/>
          </div>
          </div>
          </div>
          <div className="flex flex-col gap-3">
      
          <Link to='/profile' className="flex gap-3 justify-center  bg-green-700 py-[8.5px] rounded-md items-center ">
            
          <FaUser color="white" size={25} />
              <p className="text-white">
              {loggedUserId}
     
        </p>

     
        </Link >

          <button className="bg-[#E1E1E1] dark:bg-black dark:text-white py-[8.5px] justify-center flex items-center w-full rounded-md">
            Logout <IoMdLogOut size={20}/>
          </button>
          </div>


          
          </div>}
    </div>
  );
};
HeaderMain.propTypes = {
  children: PropTypes.node, // Example: children should be a React node
};
export default HeaderMain;
