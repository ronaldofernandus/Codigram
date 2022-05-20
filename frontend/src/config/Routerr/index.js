import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const Routerr = () => {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<MainApp />} />
      </Routes>
    
  );
};

export default Routerr;
