import React, { useState, useEffect } from "react";
import "./css/main.css";
import "./css/util.css";

import { bg } from "./images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPosting } from "../../Axios/postingAxios";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("1.Mulai");

    dispatch(addPosting({ title: title, caption: caption }));
  };

  return (
    <div>
      <h1>Add Page</h1>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="wrap-login100">
            <span className="login100-form-logo">
              <i className="zmdi zmdi-landscape"></i>
            </span>
            <span className="login100-form-title p-b-34 p-t-27">
              Form Input
            </span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter title"
            >
              <input
                className="input100"
                type="title"
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="title"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>{" "}
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter caption"
            >
              <input
                className="input100"
                type="caption"
                name="caption"
                value={caption}
                onChange={(event) => setCaption(event.target.value)}
                placeholder="caption"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>
            <div className="container-login100-form-btn">
              <button
                onClick={(event) => submitHandler(event)}
                type="submit"
                className="login100-form-btn"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
