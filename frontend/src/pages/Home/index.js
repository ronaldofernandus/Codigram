import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";
import { bg } from "../../assets/";

import "./Home.css";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;

  return (
    <div className="h-100 w-100">
      <div className="border border-secondary">
        
        {/* <div
          className="img d-flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(https://via.placeholder.com/150)` }}
        ></div> */}
        <hr />
        <div className="border1 border border-secondary"></div>
      </div>
    </div>
  );
};

export default HomePage;
