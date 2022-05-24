import React, { useState, useEffect } from "react";
import "./css/main.css";
import "./css/util.css";

import { bg } from "./images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPosting } from "../../Axios/postingAxios";
import { Upload } from "../../components";

const AddPage = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const [imagePreview, setImagePreview] = useState(null);

  const dispatch = useDispatch();
  const get_token = localStorage.getItem("get_token");
  const imageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const submitHandler = (event) => {
    console.log("title", title);
    console.log("caption", caption);

    console.log("image", image);
    // event.preventDefault();
    // console.log("1.Mulai");
  };

  const data = new FormData();
  data.append("title", title);
  data.append("caption", caption);
  data.append("image", image);
  dispatch(
    addPosting({ image: image, title: title, caption: caption }, get_token)
  );

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
            <Upload onChange={(e) => imageUpload(e)} img={imagePreview} />
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter title"
            >
              <input
                className="input100"
                type="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="title"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Enter caption"
            >
              <input
                className="input100"
                type="caption"
                name="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="caption"
              />
              <span
                className="focus-input100"
                data-placeholder="&#xf191;"
              ></span>
            </div>
            <div className="container-login100-form-btn">
              <button
                onClick={submitHandler}
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
