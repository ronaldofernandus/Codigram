import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import NavbarMenu from "../Navbar/NavbarMenu";
import User from "../../pages/User";
import Detail from "../../pages/Detail/index";
import Home from "../../pages/Home";
import AddPage from "../../pages/AddPage";

const MainContent = (props) => {
  const { loginStatus, loginCbHandler } = props;
  return (
    <div className="container">
      <div className="header-wrapper">
        <NavbarMenu
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></NavbarMenu>
      </div>

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/add" element={<AddPage></AddPage>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
