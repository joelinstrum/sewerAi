import React from "react";
import ReactDOM from "react-dom";
import { LoaderContainer, LoaderWrapper } from "./Elements";
import CircleLoader from "./CircleLoader";

interface IProps {
  message?: string;
  useRoot?: Boolean;
}

const Loader = (props: IProps) => {
  return (
    <LoaderContainer>
      <LoaderWrapper>
        <CircleLoader />
        <div className="loader-message">{props.message}</div>
      </LoaderWrapper>
    </LoaderContainer>
  );
};

export default (props: IProps) => {
  if (props.useRoot) {
    return ReactDOM.createPortal(
      <Loader message={props.message} />,
      document.querySelector("#root")
    );
  } else {
    return <Loader message={props.message} />;
  }
};
