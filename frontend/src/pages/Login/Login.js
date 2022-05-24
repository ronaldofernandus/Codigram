import React, { useState, useEffect } from "react";

import { bg, google } from "./images";
import "./css/main.css";
import "./css/util.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = (props) => {
  const { loginCbHandler } = props;
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let loginUser = await axios({
        method: "POST",
        url: "http://localhost:3000/user/login",
        data: form,
      });

      // console.log(loginUser.data);
      const get_token = loginUser.data.get_token;
      localStorage.setItem("get_token", get_token);
      loginCbHandler(true);
      // // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = () => {
    loginUser();
  };

  return (
    <div className="limiter">
      <div
        className="container-login100"

        // style="background-image: url('images/bg-01.jpg');"
      >
        <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
          <span className="login100-form-title p-b-53">Sign In With</span>

          <Link to="/" className="btn-face m-b-20">
            <i className="fa fa-facebook-official"></i>
            Facebook
          </Link>

          <Link to="/" className="btn-google m-b-20">
            <img src={google} alt="GOOGLE" />
            Google
          </Link>

          <div className="p-t-31 p-b-9">
            <span className="txt1">Username</span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Username is required"
          >
            <input
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="input100"
              type="text"
              name="username"
            />
            <span className="focus-input100"></span>
          </div>

          <div className="p-t-13 p-b-9">
            <span className="txt1">Password</span>
          </div>
          <div
            className="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input100"
              type="password"
              name="password"
            />
            <span className="focus-input100"></span>
          </div>
          <Link to="#" className="txt2 bo1 m-l-5">
            Forgot Password?
          </Link>
          <div className="container-login100-form-btn m-t-17">
            <button
              onClick={() => submitHandler()}
              className="login100-form-btn"
            >
              Sign In
            </button>
          </div>

          <div className="w-full text-center p-t-55">
            <span className="txt2">Not a member?</span>

            <Link to="#" className="txt2 bo1">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
