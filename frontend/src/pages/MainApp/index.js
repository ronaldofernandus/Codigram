import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";

import User from "../User";
import Detail from "../Detail";
import Home from "../Home";
import "./mainApp.css";
const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <div className="header-wrapper">
        <Navbar />
      </div>

      <div className="content-wrapper">
        <Routes>
          <Route path="/user" element={<User />}></Route>
          <Route path="/detail" element={<Detail />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainApp;
