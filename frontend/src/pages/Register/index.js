import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input } from "../../components/molecules/addOns";
import "./register.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title"> Register</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Username" placeholder="Username" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Input label="Nama" placeholder="Nama" />
        <Gap height={50} />
        <Button title="Register" onClick={() => loginHandler()} />
        <Gap height={100} />
        <div className="w-100 text-center mt-4 text">
          <p className="mb-0">Don't have an account?</p>
          <Link
            style={{
              color: "red",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            to="/login"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
