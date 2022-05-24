import axios from "axios";

const URL = "http://localhost:3000/user";

const getUser = async (cb) => {
  try {
    let getUser = await axios({
      method: "GET",
      url: URL,
    });

    cb(getUser);
  } catch (err) {
    console.log(err);
  }
};

const registrasiUser = async (input) => {
  try {
    let registrasiUser = await axios({
      method: "POST",
      url: URL + "/register",
      data: input,
    });

    console.log(registrasiUser.data);
  } catch (err) {
    console.log(err);
  }
};

const uploadImage = async (data) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL + "/images",
      data: data,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { getUser, registrasiUser, uploadImage };
