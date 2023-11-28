import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile";
import { useState } from "react";
import { IoMdClose, IoMdLogOut, IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";


function App() {

  return (

    <>
      <div className="dark:bg-[#171717]">
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
