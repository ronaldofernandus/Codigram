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
      User
      <h1>User</h1>
    </div>
  );
};

export default User;
