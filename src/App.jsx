import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";

function App() {
  // const { user } = useSelector((state) => state.user)
  
  

  return (

    <>
      <div className="dark:bg-[#171717] min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing  />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
