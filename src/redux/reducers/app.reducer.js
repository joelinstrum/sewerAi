import produce from "immer";
import { SET_TITLE, IS_LOADING, SET_DATA, SET_SCHEMA } from "../types";

const INITIAL_STATE = {
  title: "Fee",
  isLoading: false,
  data: [],
  schema: {},
  favorites: [],
};

export default (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TITLE:
        draft.title = action.payload;
        break;

      case IS_LOADING:
        draft.isLoading = action.payload;
        break;

      case SET_DATA:
        draft.data = action.payload;
        break;

      case SET_SCHEMA:
        draft.schema = action.payload;
        break;

      default:
        break;
    }
  });
