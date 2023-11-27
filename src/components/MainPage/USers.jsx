import { FaReply } from "react-icons/fa";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";
function USers() {
  const users = [
    {
      id: 1,
      name: "Traderx69",
      msg: "Does anyone have telegram  ?",
      time: "17:31",
      profile: "/images/profile1.png",
    },
    {
      id: 2,
      name: "Jaymann",
      msg: "Yeah it is DN ",
      time: "17:32",
      profile: "/images/profile2.png",
    },
    {
      id: 3,
      name: "Don420",
      msg: "Dev is noob I sold",
      time: "17:30",
      profile: "/images/profile3.png",
    },
    {
      id: 4,
      name: "TopG23",
      msg: "kek",
      time: "17:29",
      profile: "/images/profile4.png",
    },
  ];
  return (
    <div>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <div>
                <img src={user.profile} alt="user profile" />
              </div>
              <div>
                <h1>{user.name}</h1>
                <p>{user.time}</p>
                <FaReply />
              </div>
            </div>
            {/* show profile */}
            <div>
              <FaCaretUp />
              <FaCaretDown />
            </div>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type your message"
        />
        <button>Send</button>
      </div>
    </div>
  );
}

export default USers;
