import React from "react";
import LoaderLoading from "./LoaderLoading";
import "./loader.scss";
import { LoadingDiv } from "./Elements";

interface IProps {
  isLoading: boolean;
  message?: string;
  children?: any;
}

export default (props: IProps) => {
  return (
    <LoadingDiv>
      {props.isLoading ? (
        <LoaderLoading message={props.message} />
      ) : (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    </LoadingDiv>
  );
};
