import { useSelector, useDispatch } from "react-redux";
import { SET_TITLE } from "@redux/types";

const useSetTitle = (_title = "") => {
  useDispatch({ type: SET_TITLE, payload: _title });
  const title = useSelector(({ appReducer }) => appReducer.title);
  document.title = title;
};

export default useSetTitle;
