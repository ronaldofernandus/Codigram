import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";

const HomePage = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };

  return (
    <div>
      HomePage
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;
