import React, { useState, useEffect } from "react";
import "./navbar.css";
import { BsPeople } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";

const NavbarMenu = (props) => {
  const { loginStatus, loginCbHandler } = props;

  const loginHandler = () => {
    loginCbHandler(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    loginCbHandler(false);
  };
  return (
    <div className="navigation">
      <div className="logo">
        <a className="no-underline" href="#">
          Codigram
        </a>
      </div>
      <div className="navigation-search-container">
        <input className="search-field" type="text" placeholder="Search" />
        <div className="search-container">
          <div className="search-container-box">
            <div className="search-results"></div>
          </div>
        </div>
      </div>
      <div
        className="navigation-icons"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Link to="/" target="_blank" className="navigation-link">
            <AiOutlineHome size={25} style={{ fill: "black" }} />
          </Link>
        </div>
        <div>
          <Link to="/add" target="_blank" className="navigation-link">
            <AiOutlinePlusSquare size={25} style={{ fill: "black" }} />
          </Link>
        </div>

        <div>
          <Link to="/user" target="_blank" className="navigation-link">
            <BsPeople size={25} style={{ fill: "black" }} />
          </Link>
        </div>

        <div>
          {loginStatus ? (
            <Link to="" onClick={() => logoutHandler()}>
              <BiLogOut size={25} style={{ fill: "black" }} />
            </Link>
          ) : (
            <Link to="" onClick={() => loginHandler()}>
              <BiLogOut size={25} style={{ fill: "black" }} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
