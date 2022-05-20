import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

const Routerr = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("getAccesJwt")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          loginStatus ? (
            <Login />
          ) : (
            <MainApp
              loginStatus={loginStatus}
              loginCbHandler={loginCbHandler}
            ></MainApp>
          )
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routerr;
