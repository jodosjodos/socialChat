import { IoMdSearch } from "react-icons/io";

function MiddleLogo() {
  const savedTheme = localStorage.getItem("theme");
  const isDarkTheme = savedTheme === "dark";
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div>
        <img src={`${isDarkTheme ? "images/logoBigLight.png" : "images/logoBigLight.png"}`} alt="logo" />
      </div>
      <div>
        <h1 className="text-[#898989] font-bold text-2xl">Welcome to Chatr. Please input a token address to get started.</h1>
      </div>
      <div className="flex flex-row items-center gap-3">
        <input
          type="text"
          name="search"
          className="bg-[#E1E1E1] rounded-3xl outline-none px-3 w-[600px] h-[50px] dark:bg-[#898989]"
        />
        <button className="font-bold">
          <IoMdSearch color={`${isDarkTheme ? "#898989" : "#E1E1E1"}`} size={38} />
        </button>
      </div>
    </div>
  );
}

export default MiddleLogo;
