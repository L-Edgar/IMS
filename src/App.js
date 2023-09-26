import React, { useEffect } from "react";
import "./App.css";
import LoginSignup from "./components/LoginSignUp/LoginSignup";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <SideBar/>
          
          <MainDash/>
          <RightSide/>
          
          <Routes>
            <Route path='LoginSignup/' element={<LoginSignup/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
