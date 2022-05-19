import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<MainApp></MainApp>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
