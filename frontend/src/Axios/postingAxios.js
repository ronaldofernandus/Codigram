import axios from "axios";

const URL = "http://localhost:3000/posting";

const getPosting = async (cb) => {
  try {
    let getPosting = await axios({
      method: "GET",
      url: URL,
    });

    cb(getPosting);
  } catch (err) {
    console.log(err);
  }
};

export { getPosting };
