import { useSelector } from "react-redux";

export const useLoading = () => {
  const isLoading = useSelector(({ appReducer }) => appReducer.isLoading);
  return isLoading;
};
