import React from "react";
import { Hape } from "../../assets/";
import { Button, Gap, Input } from "../../components/addOns";
import "./register.css";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <img src={Hape} alt="" />
        </div>

        <form action="">
          <h3>Silahkan Register Akun Anda</h3>
          <div className="form-row">
            <input className="form-control" placeholder="Email" />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>

          <div className="form-row">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <input type="text" className="form-control" placeholder="Nama" />
          </div>

          <button>
            Register
            <i className="zmdi zmdi-long-arrow-right"></i>
          </button>
          <div className="ms-auto">
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "60px",
              }}
              to="/login"
            >
              Sudah Punya akun? Silahkan Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
