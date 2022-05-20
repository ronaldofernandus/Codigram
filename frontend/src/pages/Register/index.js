import React, { useState, useEffect } from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input } from "../../components/molecules/addOns";
import "./register.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    nama: "",
  });
  const navigate = useNavigate();

  const registrasiUser = async () => {
    try {
      let registrasiUser = await axios({
        method: "POST",
        url: "http://localhost:3000/user/register",
        data: input,
      });

      Swal.fire("Registrasi", "Registrasi Berhasil");
    } catch (err) {
      console.log(err);
    }
  };

  const registrasiHandler = () => {
    registrasiUser(input);
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title"> Register</p>
        <Input
          type="text"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          label="Email"
          placeholder="Email"
        />
        <Gap height={18} />
        <Input
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          type="text"
          label="Username"
          placeholder="Username"
        />
        <Gap height={18} />
        <Input
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          label="Password"
          placeholder="Password"
        />
        <Gap height={50} />
        <Input
          type="text"
          onChange={(e) => setInput({ ...input, nama: e.target.value })}
          label="Nama"
          placeholder="Nama"
        />
        <Gap height={50} />
        <Button title="Register" onClick={() => registrasiHandler()} />
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
            to="/"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
