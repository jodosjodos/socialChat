import { FaReply } from "react-icons/fa";
import { BsTwitterX, BsDiscord } from "react-icons/bs";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
import { userProfile } from "../../../data/user";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { store } from "../../../redux/store";
import { loadComment, makeComment } from "../../../redux/action/comment";
import Popup from "../../Popup/Popup";
function USers() {
  
  const [isHovered, setIsHovered] = useState({ id: "", hovered: false });

  const savedTheme = localStorage.getItem("theme");
  const { comments,loading } = useSelector((state) => state.comments)
  let loggedInUser = {
    id: 56 ,
    name: "Traderx69",
    votes:'54',
    profile: "/images/profile1.png",
  }
  function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
  }
  
  // Example usage:
 
  const modifiedComments =flattenArray(comments);
 console.log(modifiedComments)
  
  useEffect(() => {
    const fetch=async  () => {
      await store.dispatch(loadComment(loggedInUser))
      handleScrollToBottom()
    }
    fetch()

  }, [store.dispatch])
  
  function handleScrollToBottom() {
    const commentContainer = document.getElementById("comment-container");
    if (commentContainer) {
      commentContainer.scrollTop = commentContainer.scrollHeight;
     
    }
  }

  const isDarkTheme = savedTheme === "dark";

  const [loginPopup,setLoginPopup]=useState(false)
  const [comment,setComment]=useState("")
  const handleComment = async() => {
    await store.dispatch(makeComment({ ...loggedInUser, msg: comment }))
    setComment('')
    handleScrollToBottom()
  }
  
console.log(modifiedComments)
  
  //  use margin for solution for making user div to  be fit to image and time divv
  return (
    <div className="flex flex-col gap-5  lg:mx-32 md:mx-25 mx-3    rounded-2xl   p-5 bg-[#E1E1E1] dark:bg-[#202020] ">
      <div id="comment-container" className="flex flex-col  max-h-[500px] min-h-fit overflow-y-scroll   gap-12">
        {loading &&
          <div className="flex items-center justify-center">
          
            <div className="border-t-4 border-gray-300  border-4 border-t-blue-500 border-solid rounded-full h-10 w-10 animate-spin"></div>
          </div>
        }
        {modifiedComments.length>0&&modifiedComments.map((user) => (
          <div
            key={user.id}
            className="flex flex-row relative  items-center justify-between"
          >
            <div className="flex flex-row md:gap-10 gap-3 justify-between items-center">
              <div
                className="hover:cursor-pointer"
                onMouseEnter={() =>
                  setIsHovered({ id: user.id, hovered: true })
                }
                onMouseLeave={() => setIsHovered({ id: "", hovered: false })}
              >
                {isHovered.id == user.id && isHovered.hovered && (
                  <div className="flex flex-col gap-8 z-[1000] bg-white border-4 top-[-400px] left-0  rounded-2xl    p-5 absolute  dark:bg-[#202020] dark:border-[#333333]">
                    <div className="flex flex-row items-center gap-10">
                      <div>
                        <img
                          src={user.comment.profile}
                          alt=" user profile"
                          className="w-[91px] h-[91px]"
                        />
                      </div>
                      <div>
                        <h1 className="text-[#898989] font-bold text-2xl">
                          {user.comment.name}
                        </h1>
                        <h1 className="text-[#00FF57] font-semibold">
                          {user.votes} UpVotes | {user.comments} comments
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h1 className="text-[#898989] font-bold text-xl">
                        Badges
                      </h1>
                      <div className="flex flex-row items-center gap-12">
                        {userProfile.badges.map((badge) => (
                          <div
                            key={badge.id}
                            className={` ${
                              badge.id == 4 ? "bg-[#ffe335]" : "bg-[#00FF57]"
                            } px-3 py-2 rounded-lg`}
                          >
                            <img src={badge.image} alt="badge img" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div>
                          <h1 className="text-[#898989] font-bold text-xl">
                            Top Comments
                          </h1>

                          <div className="flex flex-row justify-between items-center">
                            <div className="text-[#898989] font-semibold">
                              <p>{userProfile.topComment}</p>
                              <p>{userProfile.pair}</p>
                            </div>
                            <div className="flex flex-row items-center  font-bold text-xl">
                              <FaCaretUp color="#00FF57" />
                              <p className="text-[#00FF57]">
                                {userProfile.comments}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-8">
                        {/*  twitter  */}
                        <div className="Twitter flex flex-row gap-5 items-center justify-center ">
                          <BsTwitterX size={30} color={`${isDarkTheme ? "#898989" :"white"}`} />
                          <p className="dark:text-[#898989]">{userProfile.xUsername}</p>
                        </div>
                        <div className="Twitter flex flex-row justify-center items-center gap-5">
                          <BsDiscord size={30}  color={`${isDarkTheme ? "#898989" :"white"}`}/>
                          <p className="dark:text-[#898989]">{userProfile.discordUsernam}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <img
                  src={user.comment.profile}
                  alt="user profile"
                  className="min-w-[48px] min-h-[48px] max-h-[54px] max-w-[54px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-[#898989] font-bold md:text-xl text-md">
                    {user.comment.name}
                  </h1>
                  <p className="text-[#4B4B4B] font-bold md:text-xl text-md">
                    {user.comment.time}
                  </p>
                  <FaReply
                    color="#898989"
                    className="md:w-[20px] md:h-[20px] w-[12px] h-[12px]"
                  />
                </div>

                <p className="text-[#898989]  md:text-2xl">{user.comment.msg}</p>
              </div>
            </div>
            {/* show profile */}
            <div className="flex flex-row gap-2 items-center justify-between">
              <FaCaretUp
                color="#898989"
                className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]"
              />
              <FaCaretDown
                color="#898989"
                className="md:w-[25px] md:h-[25px] w-[20px] h-[20px]"
              />
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
          value={comment}
          className="bg-[#898989] text-white placeholder:text-white outline-none w-[85%] px-3 py-4 rounded-2xl font-semibold dark:placeholder:text-[#636363] dark:text-[#636363]"
        onChange={(e)=>setComment(e.target.value)}/>
        <button className="w-[14%] min-w-[60px] bg-[#898989] text-white font-semibold rounded-2xl  dark:text-black" onClick={handleComment}>
          Send
        </button>
      </div>
{loginPopup&&<Popup setLoginPopup={setLoginPopup}></Popup>}
    </div>
  );
}

export default USers;
