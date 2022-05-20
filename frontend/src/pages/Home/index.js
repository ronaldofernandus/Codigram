import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <div>
      HomePage
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <h1>Home</h1>
      <p>Login Status:</p>
      <p>{JSON.stringify(loginStatus)}</p>
    </div>
  );
};

export default HomePage;
