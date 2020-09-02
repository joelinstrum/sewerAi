import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "@redux/actions/app.actions";

export const useData = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ appReducer }) => appReducer.data);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return data;
};
