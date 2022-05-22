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

export { getUser };
