import React from "react";
import LoaderLoading from "./LoaderLoading";
import "./loader.scss";

interface Props {
  isLoading: boolean;
  children?: any;
}

export default class Loader extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <LoaderLoading />
        ) : (
          <React.Fragment>{this.props.children}</React.Fragment>
        )}
      </div>
    );
  }
}
