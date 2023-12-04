import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import Chart from "./components/Graph/Graph";
import CandlestickChart from "./components/Graph/Chart";
import TradingViewWidget from "./components/Graph/Graph";


function App() {
  let data = {
    t: [
      1691107200,
      1691193600,
      1691280000,
      1691366400,
      1691452800,
      1691539200,
      1691625600
    ],
    o: [
      1835.91147464964,
      1827.3274199517277,
      1833.281254697207,
      1824.9713922126505,
      1825.5963758598762,
      1855.6970197040928,
      1854.541532143213
    ],
    c: [
      1827.3274199517277,
      1833.281254697207,
      1824.9713922126505,
      1825.5963758598762,
      1855.6970197040928,
      1854.541532143213,
      1850.7309811217847
    ],
    h: [
      1844.5358538095247,
      1839.2544883461283,
      1838.8226392485674,
      1826.2215735403524,
      1871.7323789604843,
      1856.8532272011294,
      1858.359928874923
    ],
    l: [
      1818.7835011732616,
      1821.3929211090651,
      1820.707127346801,
      1824.3466225254022,
      1817.617427581782,
      1853.3867640702072,
      1846.928259689953
    ],
    v: [
      363847254.3575892,
      272000944.88209605,
      353397619.095679,
      561199119.7088313,
      665420844.0497906,
      385569952.96697325,
      386313997.8038614
    ],
    liq: [
      2384235698.4278,
      2522251513.5117,
      2565385150.5658,
      2617279732.1846,
      2663266259.9753,
      2685306517.8208,
      2684502879.725
    ],
    price_scale: 100,
    s: 'ok'
  }

   return (

    <>
      <div className="dark:bg-[#171717] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/chart" element={<CandlestickChart data={data} />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            {/* <Route path="/graph" element={<TradingViewWidget/>}/> */}
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
