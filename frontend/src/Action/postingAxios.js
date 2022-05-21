import axios from "axios";

const URL = "http://localhost:3000/posting";

const getAllPosting = async (cb) => {
  try {
    let getAllPosting = await axios({
      method: "GET",
      url: URL,
    });
    cb(getAllPosting);
  } catch (e) {
    console.log(e);
  }
};

const addPosting = async (jadwal) => {
  try {
    let addPosting = await axios({
      method: "POST",
      url: URL + "/add",
      data: jadwal,
    });
    console.log(addPosting.data);
  } catch (e) {
    console.log(e);
  }
};

export { getAllPosting, addPosting };
