import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainContent, Banner } from "./components";

import LoginPage from "./pages/Login/Login";


function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const loginCbHandler = (results) => {
    setLoginStatus(results);
  };

  return (
    <div className="main-page container-fluid">
      {!loginStatus ? (
        <LoginPage></LoginPage>
      ) : (
        <MainContent
          loginStatus={loginStatus}
          loginCbHandler={loginCbHandler}
        ></MainContent>
      )}
    </div>
  );
}

export default App;