import React, { useState, useEffect } from "react";
import "./user.css";
import { Navbar } from "../../components";

const User = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCbHandler = (result) => {
    setLoginStatus(result);
  };
  return (
    <div className="container-fluid">
      HomePage
      <Navbar
        loginStatus={loginStatus}
        loginCbHandler={loginCbHandler}
      ></Navbar>
      <h1>Home</h1>
    </div>
  );
};

export default User;
