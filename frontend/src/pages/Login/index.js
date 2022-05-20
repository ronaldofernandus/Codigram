import React, { useState, useEffect } from "react";
import { google, b } from "../../assets";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
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
      const getAccesJwt = loginUser.data.getAccesJwt;

      localStorage.setItem("getAccesJwt", getAccesJwt);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = () => {
    loginUser(form);
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div>
                <h3 className="text-center mb-0">Sign in with</h3>

                <Link
                  style={{
                    color: "red",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  to="#"
                  className="btn-google m-b-20"
                >
                  <img src={google} alt="GOOGLE" />
                </Link>
              </div>
              <div style={{ paddingTop: "2em", textAlign: "center" }}>
                <p>Or</p>
              </div>
              <form action="#" className="login-form">
                <div className="form-group">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user"></span>
                  </div>
                  <input
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
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
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
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
                    onClick={() => submitHandler()}
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
    </section>
  );
};

export default Login;
