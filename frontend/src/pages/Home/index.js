import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";

import './Home.css'

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
      <div className="b1"></div>
      <div className="b2"></div>
      <div className="b3"></div>
    </div>
  );
};

export default HomePage;
