import { IoMdSearch } from "react-icons/io";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { store } from "../../redux/store";
import { loadCoinStart } from "../../redux/reducer/coin";
import { getCoin } from "../../redux/action/coin";
  

function MiddleLogo() {
  const [token, setToken] = useState()
  const savedTheme = localStorage.getItem("theme");
  const isDarkTheme = savedTheme === "dark";
  const navigate = useNavigate();
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    store.dispatch(loadCoinStart())
    store.dispatch(getCoin('usd', token));

    return navigate(`/main`)
    
  }
  return (
    <div className="flex flex-col items-center px-3 justify-center gap-3">
      <div>
        <img src={`${isDarkTheme ? "images/logoBigLight.png" : "images/logoBigLight.png"}`} alt="logo" />
      </div>
      <div>
        <h1 className="text-[#898989] font-bold text-2xl">Welcome to Chatr. Please input a token address to get started.</h1>
      </div>
      <form className="flex flex-row justify-center  items-center w-full gap-3" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
       
          className="bg-[#E1E1E1] rounded-3xl outline-none px-3 w-[100%] md:w-[80%] h-[50px] dark:bg-[#898989]"
          onChange={(e)=>setToken(e.target.value)}
          
        />
        <button className="font-bold">
          <IoMdSearch color={`${isDarkTheme ? "#898989" : "#E1E1E1"}`} size={38} />
        </button>
      </form>
    </div>
  );
}

export default MiddleLogo;
