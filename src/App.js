import React, { useEffect } from "react";
import "./App.css";
import LoginSignup from "./components/LoginSignUp/LoginSignup";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import MainDash from "./components/MainDash/MainDash";

function App() {
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <SideBar/>
          <MainDash/>
          <Routes>
            <Route path='/' element={<LoginSignup/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
