import React from "react";
import { Loader } from "@uicomponents";

interface IProps {}

interface IState {
  isLoading: boolean;
}

export default class Contact extends React.Component<IProps, IState> {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setLoader();
  }

  setLoader = () => {
    window.setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  render() {
    return (
      <Loader isLoading={this.state.isLoading}>
        <div>Page has loaded</div>
      </Loader>
    );
  }
}
