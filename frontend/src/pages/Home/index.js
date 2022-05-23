import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { Navbar } from "../../components";
import { bg, b } from "../../assets/";

import { useDispatch } from "react-redux";
import { getListPosting } from "../../Axios/postingAxios";
import { useSelector } from "react-redux";

import "./Home.css";

const HomePage = (props) => {
  const { getListPostingResult, getListPostingLoading, getListPostingError } =
    useSelector((state) => state.postingReducers);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1 Masuk");
    dispatch(getListPosting());
  }, [dispatch]);

  return (
    <div>
      <h1>Test</h1>
      {getListPostingResult ? (
        getListPostingResult.map((result) => {
          return (
            <div className="border border-secondary">
              <div className="header" key={result.UserId}>
                <p>
                  <img
                    src={result.User.profile}
                    className="profile-pic rounded-circle"
                    data-toggle="collapse"
                    alt="..."
                  />
                </p>
              </div>

              <hr />
              <div className="fill">
                {/* <img src={require(`${result.image}`)} alt="" /> */}
                <img src={"https://via.placeholder.com/150"} alt="" />
              </div>
              <hr />

              <div className="row" key={result.id}>
                <div className="row">
                  <p>{result.title}</p>
                </div>
                <div className="row">
                  <p>{result.caption}</p>
                </div>
              </div>
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

export default HomePage;
