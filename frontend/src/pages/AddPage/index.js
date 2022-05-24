import React, { useState, useEffect } from "react";
import "./css/main.css";
import "./css/util.css";

import { bg } from "./images";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPosting } from "../../Axios/postingAxios";

import { useSelector } from "react-redux";

const AddPage = () => {
  const { uploadImageResult, uploadImageLoading, uploadImageError } =
    useSelector((state) => state.postingReducers);

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const [image, setImage] = useState("");

  const [saveImage, setSaveImage] = useState(null);
  const imageUpload = (event) => {
    console.log(event.target.files[0]);
    let uploaded = event.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };

  const dispatch = useDispatch();
  const get_token = localStorage.getItem("get_token");

  useEffect(() => {
    console.log("use effect");
    if (uploadImageResult) {
      if (uploadImageResult === 200) {
        console.log("upload");
        let data = {
          imge: uploadImageResult.image,
          caption: caption,
          title,
        };
        console.log(data);
        dispatch(addPosting(data));
        setSaveImage("https://via.placeholder.com/150");
        setCaption("");
      }
    }
  }, [uploadImageResult]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('handle submit');
    let formData = new FormData();
    formData.append("image", saveImage);
    dispatch(addPosting(formData));
    return formData;
  };
  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
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
            <form onSubmit={(event) => handleSubmit(event)}>
              <span className="login100-form-logo">
                <i className="zmdi zmdi-landscape"></i>
              </span>
              <span className="login100-form-title p-b-34 p-t-27">
                Form Input
              </span>
              <div className="upload">
                <img className="preview" src={image} alt="preview" />

                <input
                  onChange={(event) => handleUploadChange(event)}
                  type="file"
                  className="form-control"
                  accept="image/*"
                />
              </div>
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
                <button type="submit" className="login100-form-btn">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
