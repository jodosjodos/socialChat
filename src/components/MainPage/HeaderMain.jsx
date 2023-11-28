import { IoMdClose, IoMdLogOut, IoMdSearch } from "react-icons/io";

import { CgMenuRightAlt } from "react-icons/cg";


import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
const HeaderMain = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const loggedUserId = "0x95...0cc";
  

  return (
    <div className="flex top-0 left-0 right-0 flex-row items-center justify-between md:p-5 p-2 w-full">
      <div className="">
       {children}
      </div>
      <div className="md:flex hidden flex-row items-center gap-3">
        <input
          type="text"
          name="search"
          className="bg-[#E1E1E1] rounded-lg outline-none px-3 w-[420px] h-[28px]"
        />
        <button>
          <IoMdSearch color="#E1E1E1" size={34} />
        </button>
      </div>
      <div className="md:flex  hidden flex-row gap-3 items-center">
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
      <CgMenuRightAlt size={34} onClick={()=>setSidebarOpened(true)} />

      </div>

      {sidebarOpened && <div className="fixed z-[1200] shadow-md flex flex-col justify-between md:hidden blok top-0 right-0 h-screen w-[80%] min-w-[200px]  bg-white py-3 px-3">
          <div className="w-full">
          <div className="w-full flex justify-end pt-2 pb-8">
            <IoMdClose size={20} color="black" onClick={()=>setSidebarOpened(false)}/>
          </div>
  
          <div className="relative w-full">

          <input className=" h-[40px] w-full rounded-md bg-[#E1E1E1] px-3" placeholder="Search here ...">
            
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

          <button className="bg-[#E1E1E1] py-[8.5px] justify-center flex items-center w-full rounded-md">
            Logout <IoMdLogOut size={20}/>
          </button>
          </div>


          
          </div>}
    </div>
  );
};

export default HeaderMain;
