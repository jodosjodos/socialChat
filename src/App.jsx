import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import Chart from "./components/Graph/Graph";


function App() {
const data = [
    {
      time: 1701400500000,
      open: 0.0017501470920357174,
      high: 0.0017501470920357174,
      low: 0.0017501470920357174,
      close: 0.0017501470920357174,
      volume: 14.648391,
    },
    {
      time: 1701402300000,
      open: 0.0017353214186830548,
      high: 0.0017353214186830548,
      low: 0.0017353214186830548,
      close: 0.0017353214186830548,
      volume: 159.822235,
    },
    {
      time: 1701403200000,
      open: 0.001698455530198322,
      high: 0.001698455530198322,
      low: 0.001698455530198322,
      close: 0.001698455530198322,
      volume: 26.420325,
    },
    {
      time: 1701404100000,
      open: 0.001694146182814191,
      high: 0.001694146182814191,
      low: 0.001694146182814191,
      close: 0.001694146182814191,
      volume: 21.486134,
    },
    {
      time: 1701410400000,
      open: 0.0017141927645928957,
      high: 0.0017141927645928957,
      low: 0.0017141927645928957,
      close: 0.0017141927645928957,
      volume: 16.362819,
    }
  ];
  
  

  return (

    <>
      <div className="dark:bg-[#171717] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
         
            <Route path="/coin/:token" element={<MainPage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
