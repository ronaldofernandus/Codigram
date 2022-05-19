import React from "react";
import "./navbar.css";
import { BsPeople } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
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

      <div className="navigation-icons">
        <Link
          to="https://instagram.com/mimoudix"
          target="_blank"
          className="navigation-link"
        >
          <FaRegCompass size={25} style={{ fill: "black" }} />
        </Link>
        <a className="navigation-link notifica">
          <FiHeart size={25} style={{}}>
            <div className="notification-bubble-wrapper">
              <div className="notification-bubble">
                <span className="notifications-count">99</span>
              </div>
            </div>
          </FiHeart>
        </a>
        <Link to="" target="_blank" className="navigation-link">
          <BsPeople size={25} style={{ fill: "black" }} />
        </Link>
        <Link to="" target="_blank" className="navigation-link">
          <BiLogOut size={25} style={{ fill: "black" }} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
