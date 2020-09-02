import { useSelector } from "react-redux";

export const useSchema = () => {
  const { data, schema } = useSelector(({ appReducer }) => appReducer);
  return schema[data.code];
};
