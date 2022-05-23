import axios from "axios";

export const Get_List_Posting = "Get_List_Posting";

export const getListPosting = () => {
  // console.log("2.Masuk");
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
