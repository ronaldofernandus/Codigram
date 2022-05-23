import { Get_List_Posting } from "../../Axios/postingAxios";

const initialState = {
  getListPostingResult: false,
  getListPostingLoading: false,
  getListPostingError: false,
};

const posting = (state = initialState, action) => {
  switch (action.type) {
    case Get_List_Posting:
      // console.log("4 Masuk reducers")
      return {
        ...state,
        getListPostingResult: action.payload.data,
        getListPostingLoading: action.payload.loading,
        getListPostingError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posting;