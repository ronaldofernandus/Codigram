import axios from "axios";

export const Get_List_Posting = "Get_List_Posting";

export const Add_Posting = "Add_Posting";

export const getListPosting = () => {
  // console.log("2.Masuk");
  const accessToken = localStorage.getItem("get_token");
  return (dispatch) => {
    dispatch({
      type: "Get_List_Posting",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:3000/posting",
      timeout: 120000,
      headers: { get_token: accessToken },
    })
      .then((response) => {
        // console.log("3.Berhasi", response);
        dispatch({
          type: "Get_List_Posting",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("3.Gagal", error);
        dispatch({
          type: "Get_List_Posting",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addPosting = (data) => {
  const accessToken = localStorage.getItem("get_token");
  console.log("2.Masuk");
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: "Add_Posting",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:3000/posting/add",
      timeout: 120000,
      data: data,
      headers: { get_token: accessToken },
    })
      .then((response) => {
        console.log("3.Berhasi", response);
        dispatch({
          type: "Add_Posting",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.Gagal", error);
        dispatch({
          type: "Add_Posting",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
