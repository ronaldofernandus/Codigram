import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainContent, Banner } from "./components";

import LoginPage from "./pages/Login/Login";
import Register from "./pages/Register";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const loginCbHandler = (results) => {
    setLoginStatus(results);
  };

  useEffect(() => {
    if (localStorage.getItem("get_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);

  return (
    <div className="main-page container-fluid">
      {loginStatus ? (
        <MainContent
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></MainContent>
      ) : (
        <LoginPage loginCbHandler={loginCbHandler}></LoginPage>
      )}
    </div>
  );
}

export default App;
