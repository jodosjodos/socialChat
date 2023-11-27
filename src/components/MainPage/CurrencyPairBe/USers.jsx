import { FaReply } from "react-icons/fa";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { users } from "../../../data/user";
function USers() {



  //  use margin for solution for making user div to  be fit to image and time div
  return (
    <div className="flex flex-col gap-5  mr-60 ml-32 rounded-2xl p-5 bg-[#E1E1E1]">
      <div className="flex flex-col gap-12">
        {users.map((user) => (
          <div key={user.id} className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-12  justify-between items-center">
              <div>
                <img src={user.profile} alt="user profile" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                <h1 className="text-[#898989] font-bold text-xl">{user.name}</h1>
                <p className="text-[#4B4B4B] font-bold">{user.time}</p>
                <FaReply  color="#898989" size={20}/>
                </div>
               
              <p className="text-[#898989]  text-2xl">{user.msg}</p>
              </div>
            </div>
            {/* show profile */}
            <div className="flex flex-row gap-2 items-center justify-between">
              <FaCaretUp size={40} color="#898989"/>
              <FaCaretDown size={40} color="#898989"/>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row  gap-3">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type your message"
          className="bg-[#898989] text-white placeholder:text-white outline-none w-[85%] px-3 py-4 rounded-2xl font-semibold"
        />
        <button className="w-[14%] bg-[#898989] text-white font-semibold rounded-2xl ">Send</button>
      </div>
    </div>
  );
}

export default USers;
