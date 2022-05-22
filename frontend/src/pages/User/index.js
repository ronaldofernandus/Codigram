import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";
import { bg, b } from "../../assets/";

import "./user.css";

const User = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const [posting, setPosting] = useState([]);

  return (
    <div class="container">
      <div className="profile">
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

      <hr width="70%" align="center" />
      <div class="fill"></div>
      <hr />
      <div>
        <p>Caption</p>
      </div>
    </div>
  );
};

export default User;
