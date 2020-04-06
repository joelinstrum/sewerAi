import { SET_TITLE } from "../types";

export const setTitle = (title) => {
  return async (dispatch) => {
    dispatch({
      type: SET_TITLE,
      payload: title,
    });
  };
};
