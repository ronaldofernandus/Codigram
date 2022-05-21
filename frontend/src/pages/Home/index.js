import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";
import { bg, b } from "../../assets/";

import "./Home.css";

const HomePage = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const [posting, setPosting] = useState([]);

  return (
    <div class="container">
      <div className="border border-secondary">
        <div className="header">
          <p>
            <img
              src={bg}
              className="profile-pic rounded-circle"
              data-toggle="collapse"
              alt="..."
            />
            User
          </p>
        </div>

        <hr />
        <div class="fill">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <hr />
        <div>
          <p>Caption</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
