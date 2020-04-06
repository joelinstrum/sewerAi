import produce from "immer";
import { SET_TITLE } from "../types";

const INITIAL_STATE = {
  title: "React App Template",
};

export default (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TITLE:
        draft.title = action.payload;
        break;

      default:
        break;
    }
  });
