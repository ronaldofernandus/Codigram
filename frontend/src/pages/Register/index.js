import React from "react";
import { RegisterBg } from "../../assets/";
import { Button, Gap, Input } from "../../components/addOns";
import "./register.css";

import { Link } from "react-router-dom";

const Register = () => {
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
        <Button title="Register" />
        <Gap height={100} />

        <Link
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          to="/login"
        >
          Sudah punya akun? Silahkan Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
