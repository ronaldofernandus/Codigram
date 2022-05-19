import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { User, Detail, Home } from "../index";

import { Navbar } from "../../components";

const MainApp = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

      <p>Footer</p>
    </div>
  );
};

export default MainApp;
