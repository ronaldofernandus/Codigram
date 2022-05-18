import React from "react";
import { Hape, bg } from "../../assets/";
import { Button, Gap, Input } from "../../components/addOns";
// import "./style.css";
import "./register.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div
                className="img d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <h3 className="text-center mb-0">Welcome</h3>

              <form action="#" className="login-form">
                <div className="form-group ">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user"></span>
                  </div>
                  <input
                    style={{
                      marginTop: "-20px",
                      marginLeft: "35px",
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-lock"></span>
                  </div>
                  <input
                    style={{
                      marginLeft: "35px",
                    }}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100 text-md-right">
                    <Link to="#">Forgot Password</Link>
                  </div>
                </div>
                <div className="form-group">
                  <button
                    style={{
                      marginLeft: "35px",
                    }}
                    type="submit"
                    className="btn form-control btn-primary rounded submit px-3"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="w-100 text-center mt-4 text">
                <p className="mb-0">Don't have an account?</p>
                <Link to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
