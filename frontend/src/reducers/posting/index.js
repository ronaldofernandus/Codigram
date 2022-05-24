import {
  Get_List_Posting,
  Add_Posting,
  upload_image,
} from "../../Axios/postingAxios";

const initialState = {
  getListPostingResult: false,
  getListPostingLoading: false,
  getListPostingError: false,

  addPostingResult: false,
  addPostingLoading: false,
  addPostingError: false,

  uploadImageResult: false,
  uploadImageLoading: false,
  uploadImageError: false,
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
    case Add_Posting:
      console.log("4 Masuk reducers");
      return {
        ...state,
        addPostingResult: action.payload.data,
        addPostingLoading: action.payload.loading,
        addPostingError: action.payload.errorMessage,
      };
    case upload_image:
      console.log("4 Masuk reducers");
      return {
        ...state,
        uploadImageResult: action.payload.data,
        uploadImageLoading: action.payload.loading,
        uploadImageError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posting;
