import React from "react";
import "./style.css";

import { a, b, phone } from "../../assets";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="image-holder">
          <img src={phone} alt="" />
        </div>

        <form action="">
          <h3>Silahkan Register</h3>

          <div className="form-row">
            <input type="email" className="form-control" placeholder="Email" />
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
          <div
            className="ms-auto"
            style={{ paddingTop: "2em", textAlign: "center", color: "black" }}
          >
            <Link to={"/login"} className="btn btn-film-detail px-4">
              Sudah Punya AKun? Silahkan Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
