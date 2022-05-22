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
      <div className="header">
        <div className="header-left">
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
        </div>
        <div className="header-right">
          <div className="nama">
            <h2>Ronaldo</h2>
          </div>
          <ul class="menu">
            <li>
              <a href="#">
                <div className="post">
                  <span className="jumlah">11</span>
                  post
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="followers">
                  <span className="jumlah1">11</span>
                  folowers
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="following">
                  <span className="jumlah2">11</span>
                  folowing
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <ul class="menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Clients</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="feed"></div>
    </div>
  );
};

export default User;
