import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";
import { bg, b } from "../../assets/";

import "./user.css";

import { getListPosting } from "../../Axios/postingAxios";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

const User = (props) => {
  const { getListPostingResult, getListPostingLoading, getListPostingError } =
    useSelector((state) => state.postingReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListPosting());
  }, [dispatch]);
  return (
    <div class="container">
      <div>
        <h1>Test</h1>
      </div>

      <div className="row p-0">
        <div className="col-4 p-0">
          <div className="row p-0 m-0">
            <div className="mx-auto d-flex py-2">
              <img
                src="https://via.placeholder.com/150"
                className="rounded-circle mx-auto d-flex"
                alt="Rounded Image"
                style={{ width: "200px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-8 p-0" style={{}}>
          <div className="container-fluid ps-3">
            <div className="">
              <div className="row p-0 m-0">
                <div className="mx-auto d-flex py-2 mb-2">
                  <p className="fs-5 text-dark me-auto my-auto">User</p>
                </div>
              </div>
              <div className="row p-0 m-0 mb-3">
                <div className="col-4">
                  <div className="py-2">
                    <p className="fs-6 text-start text-dark me-auto my-auto">
                      1 Posts
                    </p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="py-2">
                    <p className="fs-6 text-start text-dark me-auto my-auto">
                      1 Followers
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="py-2">
                    <p className="fs-6 text-start text-dark me-auto my-auto">
                      11 Following
                    </p>
                  </div>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="mx-auto d-flex py-1">
                  <p className="fs-5 fw-bold text-dark me-auto my-auto">User</p>
                </div>
              </div>
              <div className="row p-0 m-0">
                <div className="mx-auto d-flex py-0 mb-2">
                  <p className="py-0 fs-6 text-justify text-break text-dark"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <ul class="menu">
        <li>
          <a href="#">Post</a>
        </li>
        <li>
          <a href="#">Saved</a>
        </li>
        <li>
          <a href="#">Tagged</a>
        </li>
      </ul>
      <hr />

      {getListPostingResult ? (
        getListPostingResult.map((result) => {
          return (
       <div>
         <p>Posting</p>
       </div>
          );
        })
      ) : getListPostingLoading ? (
        <p>Loading</p>
      ) : (
        <p>{getListPostingError ? getListPostingError : "data kosong"}</p>
      )}
    </div>
  );
};

export default User;
